import { Text } from "react-native";
import React,{useState,useEffect} from 'react';
import { StyleSheet, View,Button } from 'react-native';
import { Avatar, Card,} from 'react-native-paper';



export default function EventFeed(){
    return(
        <View style={styles.container}> 
            <Text style={styles.setFontSizeFour}>WeRoll </Text>
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
        fontSize: 15 // Define font size here in Pixels
      },
      setFontSizeTwo: {
        fontSize: 20 // Define font size here in Pixels
      },
      setFontSizeThree: {
        fontSize: 25 // Define font size here in Pixels
      },
      setFontSizeFour: {
        fontSize: 40 // Define font size here in Pixels
      },
    
});