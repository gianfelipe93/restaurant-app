import react from 'react'
import { TextInput, StyleSheet } from 'react-native'

const SearchBar = (
    {
        searchTerm = '',
        onSearchTermChange = () => { },
        onSearchSubmitted = () => { }
    }
) => {
    return (
        <TextInput
            placeholder='Search'
            style={styles.textInput}
            onChangeText={onSearchTermChange}
            value={searchTerm}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={onSearchSubmitted}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#F0EEEF',
        padding: 15,
        borderRadius: 5
    }
})

export default SearchBar