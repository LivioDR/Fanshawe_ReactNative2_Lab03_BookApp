import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const styles = StyleSheet.create({
    touchWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
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
        <TouchableHighlight
            style={styles.touchWrapper}
            underlayColor={'#D7AE47'}
            onPress={()=>console.log(data.title)}
        >
            <View style={styles.container}>
                <>
                <Text style={styles.author}>{data.author}</Text>
                <Text style={styles.title}>{data.title}</Text>
                {
                    data.borrowed ? 
                    <Ionicons name="book" size={18} color={'black'} style={styles.icon}/>
                    : <Text style={styles.icon}></Text>
                }
                </>
            </View>
        </TouchableHighlight>
    )
}
export default BookItem