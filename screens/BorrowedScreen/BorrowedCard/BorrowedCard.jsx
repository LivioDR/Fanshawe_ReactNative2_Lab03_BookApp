import { View, Text, Image, StyleSheet, Button } from "react-native";
import theme from "../../../config/theme";


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 150,
        height: 250,
        borderRadius: 10,
        borderBottomStartRadius: 0,
        borderTopStartRadius: 0,
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 5,
        shadowOpacity: 0.8,
        backgroundColor: theme.items,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginHorizontal: 'auto',
        marginVertical: 10,
        borderWidth: 1,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
    },
    image: {

    },
})

const BorrowedCard = ({book, handleReturn}) => {
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
            <Button
            style={styles.returnBtn}
            title="Return"
            onPress={handleReturn}
            />
        </View>
    )
}
export default BorrowedCard