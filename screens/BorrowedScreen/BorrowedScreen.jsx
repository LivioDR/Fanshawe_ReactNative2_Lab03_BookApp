import { View } from "react-native";
import BorrowedCard from "./BorrowedCard/BorrowedCard";

const BorrowedScreen = ({books}) => {
    return(
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                display: 'flex', 
                flexDirection: "row", 
                width: '100%',
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                flexWrap: 'wrap',
            }}>
                {books.filter(book => book.borrowed).map(book => 
                    <BorrowedCard key={book.id} book={book} />
                )}
            </View>
        </View>
    )
}
export default BorrowedScreen