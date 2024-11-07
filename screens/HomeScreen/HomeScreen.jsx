import { View, Text, FlatList } from "react-native";


const HomeScreen = ({data}) => {


    return(
        <View style={{flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center',}}>
            <FlatList
                data={data}
                keyExtractor={book => book.id}
                renderItem={book => 
                    <Text>{book.item.title}</Text>
                }
            />
        </View>
    )
}
export default HomeScreen