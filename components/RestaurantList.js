import react from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import Restaurant from './Restaurant'

const RestaurantList = ({ title = '', data = '' }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title} - {data.length} found</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={x => <Restaurant imgURL={x.item.image_url} reviewCount={x.item.review_count} rating={x.item.rating} name={x.item.name} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 2,
    fontSize: 22
  },
  listContainer: {
    borderBlockColor: '#8A8A8A',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5
  }
})

export default RestaurantList