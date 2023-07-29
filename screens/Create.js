import { Text } from "react-native";
import React,{useState,useEffect} from 'react';
import { StyleSheet, View,Button,Pressable, TouchableOpacity } from 'react-native';
import { Avatar, Card,} from 'react-native-paper';
import {SafeAreaView, TextInput} from 'react-native';
import Buttonn from "../components/button";
import Buttonnn from "../components/button2";
import { useForm, Controller } from 'react-hook-form';


const TextInputExample = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </SafeAreaView>
    );
  };
  

export default function Create(){
    const [eventName, setEventName] = useState('');
    const [eventNumber, setEventNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');
    const [maxCapacity, setMaxCapacity] = useState('');
    const [date, setDate] = useState('');
    const [categories, setCategories] = useState('')

    const ButtonPress = () => {
        console.log(eventName, categories, eventNumber, maxCapacity, zipCode, date, city, state, phoneNumber, description)
    }
    
    return(
        <View>
            <View>
               

                <TextInput
                  style={styles.input}
                  onChangeText={setEventName}
                  value={eventName}
                  placeholder="Name of Event"
                  keyboardType="numeric"
        
                />
                
                <TextInput
                  style={styles.input10}
                  onChangeText={setCategories}
                  value={categories}
                  placeholder="Categories"
                  keyboardType="numeric"
                />

                <TextInput
                  style={styles.input2}
                  onChangeText={setEventNumber}
                  value={eventNumber}
                  placeholder="Location Address"
                  keyboardType="numeric"
                />

                <TextInput
                  style={styles.input3}
                  onChangeText={setMaxCapacity}
                  value={maxCapacity}
                  placeholder="Max Capacity"
                  keyboardType="numeric"
                />

                <TextInput
                  style={styles.input3}
                  onChangeText={setZipCode}
                  value={zipCode}
                  placeholder="Zip Code"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input4}
                  onChangeText={setCity}
                  value={city}
                  placeholder="City"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input5}
                  onChangeText={setState}
                  value={state}
                  placeholder="State"
                  keyboardType="numeric"
                />
                 <TextInput
                  style={styles.input6}
                  onChangeText={setPhoneNumber}
                  value={phoneNumber}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input7}
                  onChangeText={setDescription}
                  value={description}
                  placeholder="Description"
                  keyboardType="numeric"
                />

                <TextInput
                  style={styles.input9}
                  onChangeText={setDate}
                  value={date}
                  placeholder="Date"
                  keyboardType="numeric"
                />

                 <Buttonnn/>
                <TouchableOpacity style={styles.button1} onPress={ButtonPress}>
                    <Text style={styles.buttontext}> Create Event </Text>
                </TouchableOpacity>
            </View>

        </View>
        
    )
};

const styles = StyleSheet.create({
input:{
    height: 50,
    width: 400,
    margin: 15,
    borderWidth: 2,
    padding: 10,
    fontSize: 15,
    marginTop: 10
},
input2:{
        height: 50,
        width: 400,
        margin: 15,
        borderWidth: 2,
        padding: 10,
        fontSize: 15,
},
input3:{
    height: 50,
    width: 165,
    margin: 15,
    borderWidth: 2,
    padding: 10,
    fontSize: 15,
},
input4:{
    height: 50,
    width: 165,
    margin: 15,
    borderWidth: 2,
    padding: 10,
    fontSize: 15,
    marginTop: -55,
    margin: 250
},
input5:{
    height: 50,
    width: 165,
    margin: 15,
    borderWidth: 2,
    padding: 10,
    fontSize: 15,
    marginTop: -220
},
input6:{
    height: 50,
    width: 165,
    margin: 15,
    borderWidth: 2,
    padding: 10,
    fontSize: 15,
    marginTop: -65,
    margin: 250
},
input7: {
        height: 130,
        width: 400,
        margin: 15,
        borderWidth: 2,
        padding: 10,
        fontSize: 15,
        marginTop: -220,
},
input8:{
        height: 50,
        width: 400,
        margin: 15,
        borderWidth: 2,
        padding: 10,
        fontSize: 15,
},
input9:{
    height: 50,
    width: 165,
    margin: 15,
    borderWidth: 2,
    padding: 10,
    fontSize: 15,
    marginTop: -405,
    margin: 250
},
button1:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width:300,
    margin: 65,
    marginTop: 20
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
input10:{
        height: 40,
        width: 400,
        margin: 15,
        borderWidth: 2,
        padding: 10,
        fontSize: 15,
}
});
