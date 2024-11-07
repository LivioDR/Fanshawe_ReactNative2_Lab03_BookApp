import { View, Text, Image, StyleSheet, Button, Platform } from "react-native";
import { useRoute } from "@react-navigation/native";
import RatingAndReviews from "./RatingAndReviews/RatingAndReviews";
import theme from "../../../config/theme";
import { getNumberOfBorrowedBooks, toggleBorrowedById } from "../../../services/bookRequests";
import { useState } from "react";

const styles = StyleSheet.create({
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

    const [isBorrowed, setIsBorrowed] = useState(book.borrowed)
    const [processingRequest, setProcessingRequest] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const toggleBorrowed = async() => {
        setProcessingRequest(true)
        try{
            const borrowed = await getNumberOfBorrowedBooks()
            if(borrowed < 3){
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
                // DISPLAY ALERT HERE
            }
        }
        catch(e){
            console.log(e)
        }
        setProcessingRequest(false)
    }

    return(
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
    )
}
export default BookDetail