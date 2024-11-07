import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
        backgroundColor: '#F3E7C9',
    },
    author: {
        width: '30%',
    },
    title: {
        width: '55%',
    },
    icon: {
        width: '10%'
    }
})


const BookItem = ({data}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.author}>{data.author}</Text>
            <Text style={styles.title}>{data.title}</Text>
            {
                data.borrowed ? 
                <Ionicons name="book" size={18} color={'black'} style={styles.icon}/>
                : <Text style={styles.icon}></Text>
            }
        </View>
    )
}
export default BookItem