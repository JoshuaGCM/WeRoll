import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Question from "./Questionare";
import Interests from "../components/interests.js";
import EventFeed from "./eventFeed";

const Stack = createStackNavigator();

export default function Questions() {
    return(
    <Stack.Navigator>
      <Stack.Screen name="Gender" component={Question} />
      <Stack.Screen name="Interests" component={Interests} />
      <Stack.Screen name="Homepage" component={EventFeed} />
    </Stack.Navigator>
    )
}