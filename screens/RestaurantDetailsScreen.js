import react, { useLayoutEffect } from 'react'
import useYelpBusinessDetails from '../hooks/useYelpBusinessDetails'
import { Text, StyleSheet, View } from 'react-native'
import RestaurantImage from '../components/RestaurantImage'
import { useNavigation } from '@react-navigation/native'

const RestaurantDetailsScreen = ({ route }) => {
    const navigation = useNavigation()
    const { restaurantId } = route.params
    const { loading, error, details } = useYelpBusinessDetails(restaurantId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: details.name
        })
    }, [details.name])

    if (error) {
        return <Text>An error occurred.</Text>
    } else if (loading) {
        return <Text>loading...</Text>
    }

    return details.photos.map(photo => {
        return <View style={styles.imageContainer} key={photo}>
            <RestaurantImage imgURL={photo} />
        </View>
    })
}

const styles = StyleSheet.create({
    imageContainer: {
        margin: 10
    }
})

export default RestaurantDetailsScreen