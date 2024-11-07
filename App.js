// React and functions imports
import { useState, useEffect } from 'react';
import { getAllBooks } from './services/bookRequests';

// Screens and components imports
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BorrowedScreen from './screens/BorrowedScreen/BorrowedScreen';

// Navigation imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Styling imports
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  
  const Tab = createBottomTabNavigator()

  const [books, setBooks] = useState(undefined)

  useEffect(()=>{
    // Getting all the books from Firebase
      (async()=>{
        const books = await getAllBooks()
        setBooks(books)
      })()
  },[])

  if(!books){
    return(
      <LoadingScreen/>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen 
        name="Home"
        children={() => <HomeScreen data={books} setter={setBooks}/>}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="library"
              size={size}
              color={color}
            />
          )
        }}
        />
        <Tab.Screen 
        name="Borrowed"
        children={() => <BorrowedScreen books={books} setter={setBooks}/>}
        options={{
          headerShown: true,
          headerTitle: "My books",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="book"
              size={size}
              color={color}
            />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>   
  );
}