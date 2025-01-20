// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

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
  },
  screenOptions: commonStyle,
  initialRouteName: "Home"
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}