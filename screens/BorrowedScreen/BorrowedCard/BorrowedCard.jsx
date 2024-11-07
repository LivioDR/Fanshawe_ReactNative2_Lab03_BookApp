import { View, Text, Image, StyleSheet } from "react-native";
import theme from "../../../config/theme";


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 150,
        height: 250,
        borderRadius: 10,
        backgroundColor: theme.items,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginHorizontal: 'auto',
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
    },
    image: {

    },
    author: {
        fontSize: 16,
    },
})

const BorrowedCard = ({book}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {book.title}
            </Text>
            <Image
                source={{uri: book.cover}}
                width={100}
                height={150}
                style={styles.image}
            />
            <Text style={styles.author}>
                by {book.author}
            </Text>
        </View>
    )
}
export default BorrowedCard