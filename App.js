import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantDetailsScreen from './screens/RestaurantDetailsScreen';

const commonStyle = {
  headerTitleAlign: 'center',
}


const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Business Search",
      }
    },
    Details: {
      screen: RestaurantDetailsScreen
    }
  },
  screenOptions: commonStyle,
  initialRouteName: "Home"
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}