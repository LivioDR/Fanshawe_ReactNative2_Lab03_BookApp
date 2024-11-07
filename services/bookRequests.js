import { db } from "../config/firebase";
import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore";

// Defining the collection to be used all across these functions
const collectionName = "books"

// Returns an array with all the books in the collection
const getAllBooks = async() => {
    let books = []
    
    const booksRef = collection(db, collectionName)
    const querySnapshot = await getDocs(booksRef)
    querySnapshot.forEach(book => {
        books.push({
            id: book.id,
            ...book.data(),
        })
    })
    return books
}

// Change borrowed status of a book
const toggleBorrowedById = async(id, isBorrowed) => {
    const docRef = doc(db, collectionName, id)
    await updateDoc(docRef, {
        borrowed: isBorrowed
    })
}

// Check the number of borrowed books
const getNumberOfBorrowedBooks = async() => {
    const books = await getAllBooks()
    let borrowed = books.filter(book => book.borrowed)
    return borrowed.length
}

// Function used during development to upload the placeholder data to Firestore
const addBookToCollection = async(book) => {
    delete book.id
    const docRef = await addDoc(collection(db, collectionName), book);
    console.log(docRef)
}

export { getAllBooks, toggleBorrowedById, getNumberOfBorrowedBooks, addBookToCollection }