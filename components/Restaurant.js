import react from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const Restaurant = ({ imgURL = '', rating = '', reviewCount = '', name = '' }) => {
    return (
        <View style={styles.container}>
            <Image src={imgURL} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.text}>{rating} stars, {reviewCount} reviews</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 150
    },
    textContainer: {
        marginTop: 5,
    },
    name: {
        fontWeight: 'bold',
    },
    text: {
        color: '#8A8A8A'
    },
    container: {
        marginRight: 15
    }
})

export default Restaurant;