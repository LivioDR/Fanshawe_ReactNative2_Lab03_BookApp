import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

// TODO: set styles for this screen
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
    },
})

const LoadingScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Loading</Text>
            <ActivityIndicator size={'large'}/>
        </View>
    )
}
export default LoadingScreen