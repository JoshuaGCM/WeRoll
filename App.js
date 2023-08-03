import React, { useState, useEffect } from "react";
// import MapView ,{Marker} from 'react-native-maps';
import { StyleSheet, View, Button } from "react-native";
// import * as Location from 'expo-location';
import { NavigationContainer } from "@react-navigation/native";
import EventFeed from "./screens/eventFeed";
import Map from "./screens/Map";
import Create from "./screens/Create";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Question from "./screens/Questionare";
import { blue, red } from "react-native-ios-kit/src/styles/colors";
// import Home from './screens/components/HomeSearchBar';
const Tabs = createBottomTabNavigator();

export default function App() {
	{
		/*Return function  */
	}

	return (
		<NavigationContainer>
			<Tabs.Navigator style={styles.NavBar}>
				<Tabs.Screen name="Home" component={EventFeed} />
				<Tabs.Screen name="Create" component={Create} />
				<Tabs.Screen name="Map" component={Map} />
				<Tabs.Screen name="Questions" component={Question} />
			</Tabs.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: "100%",
		height: "94%",
	},
	NavBar: {
		color: blue
	}
});
