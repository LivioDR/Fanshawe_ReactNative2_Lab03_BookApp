import { View, FlatList } from "react-native"
import BookItem from "../BookItem/BookItem"
import theme from "../../../config/theme"

const BookList = ({data}) => {
    return(
        <View style={{flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: theme.bg}}>
            <FlatList
                data={data}
                keyExtractor={book => book.id}
                renderItem={book => 
                    <BookItem data={book.item}/>
                }
            />
        </View>
    )
}
export default BookList