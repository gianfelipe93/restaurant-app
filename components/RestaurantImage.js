import react from 'react'
import { Image, StyleSheet } from 'react-native'

const RestaurantImage = ({ imgURL = '' }) => {
    return (
        <Image src={imgURL} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 150
    }
})

export default RestaurantImage;