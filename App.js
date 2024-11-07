// Screens and components imports
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BorrowedScreen from './screens/BorrowedScreen/BorrowedScreen';

// Navigation imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Styling imports
import Ionicons from '@expo/vector-icons/Ionicons';

// Placeholder data
// TODO: remove after linking app to Firebase
import { placeholderData } from './utilities/placeholderData';


export default function App() {
  
  const Tab = createBottomTabNavigator()


  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Tab.Screen 
        name="Home"
        children={() => <HomeScreen data={placeholderData}/>}
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
        children={() => <BorrowedScreen/>}
        options={{
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