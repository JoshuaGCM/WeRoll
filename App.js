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
import Questions from "./screens/Questions";
// import Home from './screens/components/HomeSearchBar';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
const Tabs = createBottomTabNavigator();

export default function App() {
const getTabBarIcon = (name) = ({size, color }) => {
  return <MaterialCommunityIcons name={name} color={color} size={size} />
};

	{
		/*Return function  */
	}

	return (
		<NavigationContainer>
			<Tabs.Navigator initialRouteName="Questions"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { backgroundColor: '#477FED', height: 85, borderRadius: 105, },
                // tabBarIcon: ({ color, size }) => {
                //     let iconName;
                //     if (route.name === 'Home') {
                //         iconName = 'home'; // Change this to the name of the icon you want to use for the Home tab
                //     } else if (route.name === 'Create') {
                //         iconName = 'create'; // Change this to the name of the icon you want to use for the LoadScreen tab
                //     } else if (route.name === 'Questions') {
                //         iconName = 'profile'; // Change this to the name of the icon you want to use for the Profile tab
                //     }
                //     return <Icon type="font-awesome" name={iconName} size={40} color={color} marginTop={15} />;
                // },
            })}
            tabBarOptions={{
                activeTintColor: '#FFFFFF', // Change the color for the active tab
                inactiveTintColor: '#FFFFFF', // Change the color for the inactive tabs
                showLabel: false,
            }}
        >
				<Tabs.Screen name="Feed"
        component={EventFeed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
				<Tabs.Screen name="Create" component={Create} />
				<Tabs.Screen name="Questions" component={Questions} />
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
