import { StyleSheet } from "react-native";
import theme from "../../../config/theme";

export default BookDetailStyles = StyleSheet.create({
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