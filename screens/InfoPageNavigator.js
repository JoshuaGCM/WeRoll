import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import InfoPage from "./InfoPage";

const Stack = createStackNavigator();

export default function InfoPageNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="InfoPage" component={InfoPage} />
        </Stack.Navigator>
    )
}