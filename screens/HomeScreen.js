import react, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import useYelpSearch from '../hooks/useYelpSearch';

const HomeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const { loading, error, results, search } = useYelpSearch(searchTerm)

    const onSearchTermChange = (term) => {
        setSearchTerm(term)
    }

    const onSearchSubmitted = () => {
        search(searchTerm)
    }

    const filterResults = (min = 1, max = 1) => {
        return results.filter(r => {
            if (r.price) {
                return r.price.length >= min && r.price.length <= max
            }
        })
    }

    return (
        <ScrollView style={styles.container}>
            <SearchBar onSearchTermChange={onSearchTermChange} searchTerm={searchTerm} onSearchSubmitted={onSearchSubmitted} />
            {error && <Text>{error}</Text>}
            {loading && <Text>Loading...</Text>}
            {!error && !loading && <>
                <RestaurantList title="Cost effective" data={filterResults()} />
                <RestaurantList title="Bit Pricier" data={filterResults(2, 3)} />
                <RestaurantList title="Expensive" data={filterResults(4, 4)} />
            </>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingBottom: 55,
        flex: 1,
        backgroundColor: '#FFF'
    },
    textInput: {
        backgroundColor: '#F0EEEF',
        padding: 15,
        borderRadius: 5
    }
})

export default HomeScreen;