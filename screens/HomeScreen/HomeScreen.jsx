import { View, Text, FlatList } from "react-native";
import BookItem from "./BookItem/BookItem";


const HomeScreen = ({data}) => {


    return(
        <View style={{flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center',}}>
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
export default HomeScreen