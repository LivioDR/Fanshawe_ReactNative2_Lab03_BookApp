import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, Button } from "react-native";
import BookList from "./BookList/BookList";
import BookDetail from "./BookDetail/BookDetail";


const HomeScreen = ({data, setter}) => {

    const Stack = createNativeStackNavigator()

    const nav = useNavigation()

    return(
        <Stack.Navigator initialRouteName="Book List">
            <Stack.Screen
                name="Book List"
                children={() => <BookList data={data}/>}
                options={{
                    headerTitle: "Available books"
                }}
            />

            <Stack.Screen
                name="Book Detail"
                children={() => <BookDetail setter={setter} />}
                // Setting a different back button for iOS and leaving the default for Android
                options={Platform.OS == 'ios' ? {
                    headerLeft: () => (
                        <Button
                        onPress={() => {nav.navigate("Book List")}}
                        title="Back"
                        />
                    )
                } : {}}
            />
    </Stack.Navigator>
    )
}
export default HomeScreen