import { View, Modal, Text, Button, StyleSheet } from "react-native"
import theme from "../../../../config/theme"

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.bg,
    },
    title: {
        fontSize: 24,
        alignSelf: 'flex-start',
        marginStart: '10%',
    },
    text: {
        width: '80%',
        textAlign: 'justify',
        marginVertical: 10,
    }
})

const NotAllowedModal = ({show, dismiss, maxAllowed}) => {
    return(
        <Modal
            visible={show}
            transparent={false}
            animationType="slide"
        >
            <View style={styles.view}>
                <Text style={styles.title}>Oops...</Text>
                <Text style={styles.text}
                >Only {maxAllowed} books are allowed to be borrowed at the same time. Please increase your subscription plan or return one or more books if you want to borrow more.</Text>
                <Button
                    title="Dismiss"
                    onPress={dismiss}
                />
            </View>
        </Modal>
    )
}
export default NotAllowedModal