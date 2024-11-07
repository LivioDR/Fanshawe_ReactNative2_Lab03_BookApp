import { View } from "react-native";
import BorrowedCard from "./BorrowedCard/BorrowedCard";
import theme from "../../config/theme";
import { toggleBorrowedById } from "../../services/bookRequests";

const BorrowedScreen = ({books, setter}) => {

    const returnBook = async(id) => {
        try{
            await toggleBorrowedById(id, false)
            setter(prev => {
                let newBooks = [...prev]
                for(let i=0; i<newBooks.length; i++){
                    if(newBooks[i].id === id){
                        newBooks[i].borrowed = false
                    }
                }
                return newBooks
            })
        }
        catch(e){
            console.log(e)
        }
    }


    return(
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.bg,
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
                    <BorrowedCard key={book.id} book={book} handleReturn={()=>returnBook(book.id)} />
                )}
            </View>
        </View>
    )
}
export default BorrowedScreen