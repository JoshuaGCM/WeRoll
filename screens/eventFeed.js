import { Text } from "react-native";
import React,{useState,useEffect} from 'react';
import { StyleSheet, View,Button } from 'react-native';
import { Avatar, Card,} from 'react-native-paper';
import App from "../App";
import Home from "./components/HomeSearchBar";
import {Switch} from 'react-native';

const Switche = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View style={styles.container2}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  };

export default function EventFeed(){
    
    return (
    
        <View style={styles.container}> 
            <Home/>
            <Switche style={styles.container3}/>
            <Card style={styles.card1}>
            <Button style={styles.button1}
        title="Event"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </Card>
        </View>
    )
      };

const styles = StyleSheet.create({
    container: {
        margin:10,
        flex: -1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      card1:{
        margin:20,
        fontSize: 25,
        height: 100,
        width: 350
      },
      button1:{
        justifyContent: 'flex-start'
                 
      },
      setFontSizeOne: {
        fontSize: 15 
      },
      setFontSizeTwo: {
        fontSize: 20 
      },
      setFontSizeThree: {
        fontSize: 25 
      },
      setFontSizeFour: {
        fontSize: 40,
         height: 30
      },
      container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      container3:{
        height:10,
        margin:200,
      }

    
});