import { View, Text, StyleSheet } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";


const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    rating: {
        fontSize: 18,
    },
    stars: {
        marginHorizontal: 5,
    },
    reviews: {
        fontSize: 10,
    },
})

const RatingAndReviews = ({data}) => {

    return(
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <StarRatingDisplay
                rating={data.rating}
                starSize={18}
                color="black"
                style={styles.stars}
                />
                <Text style={styles.rating}>{data.rating}</Text>
            </View>
            <Text style={styles.reviews}>({data.reviews} reviews)</Text>
        </View>
    )
}
export default RatingAndReviews