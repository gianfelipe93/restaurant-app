import react from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import RestaurantImage from './RestaurantImage'
import { useNavigation } from '@react-navigation/native'

const Restaurant = ({ imgURL = '', rating = '', reviewCount = '', name = '', id = "" }) => {
    const navigation = useNavigation();

    const onRestaurantPressed = () => {
        navigation.navigate('Details', {
            restaurantId: id
        })
    }

    return (
        <TouchableOpacity onPress={onRestaurantPressed}>
            <View style={styles.container}>
                <RestaurantImage imgURL={imgURL} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.text}>{rating} stars, {reviewCount} reviews</Text>
                </View>
            </View>
        </TouchableOpacity>
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