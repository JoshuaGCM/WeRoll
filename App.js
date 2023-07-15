import React,{useState,useEffect} from 'react';
import MapView ,{Marker} from 'react-native-maps';
import { StyleSheet, View,Button } from 'react-native';

import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import EventFeed from './screens/EventFeed';
import Map from './screens/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tabs = createBottomTabNavigator()

export default function App() {


{/*Return function  */}

  return (
<NavigationContainer>
  <Tabs.Navigator>
    <Tabs.Screen name = "Map" component={Map}/>
    <Tabs.Screen name = "Events" component={EventFeed}/>
  </Tabs.Navigator>
</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '94%',
  },
});
