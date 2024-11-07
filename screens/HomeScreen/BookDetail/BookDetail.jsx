import { View, Text, Image, StyleSheet, Button, Platform, Modal } from "react-native";
import { useRoute } from "@react-navigation/native";
import RatingAndReviews from "./RatingAndReviews/RatingAndReviews";
import theme from "../../../config/theme";
import { getNumberOfBorrowedBooks, toggleBorrowedById } from "../../../services/bookRequests";
import { useState } from "react";

const styles = StyleSheet.create({
    modal: {
        view: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.bg,
        },
        title: {
            fontSize: 24,
            alignSelf: 'flex-start',
            marginStart: '10%',
        },
        text: {
            width: '80%',
            textAlign: 'justify',
            marginVertical: 10,
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.detailBg,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
    author: {
        fontSize: 16,
        padding: 10,
    },
    imgAndRatingWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    description: {
        width: "90%",
        paddingVertical: 5,
        fontSize: 14,
        textAlign: 'justify',
    },
    btnWrapper: {
        marginBottom: 20,
        marginTop: 10,
        backgroundColor: 'blue',
        width: 100,
        borderRadius: 10,
    }

})


const BookDetail = ({setter}) => {

    const route = useRoute()
    const book = route.params.data
    const MAX_BOOKS_ALLOWED = 3

    const [isBorrowed, setIsBorrowed] = useState(book.borrowed)
    const [processingRequest, setProcessingRequest] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const toggleBorrowed = async() => {
        setProcessingRequest(true)
        try{
            const borrowed = await getNumberOfBorrowedBooks()
            if(borrowed < MAX_BOOKS_ALLOWED || isBorrowed){
                await toggleBorrowedById(book.id, !book.borrowed)
                setter(prev => {
                    let booksData = [...prev]
                    for(let i=0; i<booksData.length; i++){
                        if(booksData[i].id === book.id){
                            booksData[i].borrowed = !booksData[i].borrowed
                        }
                    }
                    return booksData
                })
                setIsBorrowed(prev => !prev)
            }
            else{
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
        <Modal
            visible={showModal}
            transparent={false}
            animationType="slide"
        >
            <View style={styles.modal.view}>
                <Text style={styles.modal.title}>Oops...</Text>
                <Text style={styles.modal.text}
                >Only {MAX_BOOKS_ALLOWED} books are allowed to be borrowed at the same time. Please return one or more book if you want to borrow more.</Text>
                <Button
                    title="Dismiss"
                    onPress={()=>{setShowModal(false)}}
                />
            </View>
        </Modal>
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