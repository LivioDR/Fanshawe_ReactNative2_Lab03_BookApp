// React and components imports
import { useState } from "react";
import { View, Text, Image, Button, Platform } from "react-native";
import NotAllowedModal from "./NotAllowedModal/NotAllowedModal";
import RatingAndReviews from "./RatingAndReviews/RatingAndReviews";

// Navigation imports
import { useRoute } from "@react-navigation/native";

// Functions imports
import { getNumberOfBorrowedBooks, toggleBorrowedById } from "../../../services/bookRequests";

// Styling imports
import styles from "./BookDetailStyles";


const BookDetail = ({setter}) => {

    // getting the data for the screen from the route params
    const route = useRoute()
    const book = route.params.data

    // setting the max number of books allowed to be held at a time
    const MAX_BOOKS_ALLOWED = 3

    // setting the state variables for UI render handling
    const [isBorrowed, setIsBorrowed] = useState(book.borrowed)
    const [processingRequest, setProcessingRequest] = useState(false)
    const [showModal, setShowModal] = useState(false)


    // definition of the borrowing logic function
    const toggleBorrowed = async() => {
        setProcessingRequest(true)
        try{
            // checks if the user is allowed to borrow more books
            const borrowed = await getNumberOfBorrowedBooks()
            if(borrowed < MAX_BOOKS_ALLOWED || isBorrowed){
                // toggles the state in Firebase
                await toggleBorrowedById(book.id, !book.borrowed)
                // then updates the app state
                setter(prev => {
                    let booksData = [...prev]
                    for(let i=0; i<booksData.length; i++){
                        if(booksData[i].id === book.id){
                            booksData[i].borrowed = !booksData[i].borrowed
                        }
                    }
                    return booksData
                })
                // and refreshes the detail page UI
                setIsBorrowed(prev => !prev)
            }
            else{
                // if the user is not allowed to borrow more books, displays the modal
                setShowModal(true)
            }
        }
        catch(e){
            console.log(e)
        }
        setProcessingRequest(false)
    }

    return(
        <>
        <NotAllowedModal show={showModal} dismiss={()=>{setShowModal(false)}} maxAllowed={MAX_BOOKS_ALLOWED}/>
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>by {book.author}</Text>
            </View>
            <View style={styles.imgAndRatingWrapper}>
                <Image
                    source={{uri: book.cover}}
                    width={150}
                    height={250}
                    />
                <RatingAndReviews data={book}/>
            </View>
            <Text style={styles.description}>{book.desc}</Text>
            <View style={styles.btnWrapper}>
                <Button
                onPress={toggleBorrowed}
                disabled={processingRequest}
                title={isBorrowed ? "Return" : "Borrow"}
                color={Platform.OS === 'ios' ? "white" : "blue"}
                />
            </View>
        </View>
        </>
    )
}
export default BookDetail