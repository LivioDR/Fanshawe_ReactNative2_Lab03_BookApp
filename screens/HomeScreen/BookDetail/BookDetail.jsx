import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        paddingBottom: 10,
    },
    author: {
        fontSize: 16,
        padding: 10,
    },
    description: {
        width: "80%",
    },

})


const BookDetail = () => {

    const route = useRoute()
    const book = route.params.data

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>by {book.author}</Text>
            </View>
            <Image
                source={{uri: book.cover}}
                width={150}
                height={250}
            />
            <Text style={styles.description}>{book.desc}</Text>
        </View>
    )
}
export default BookDetail