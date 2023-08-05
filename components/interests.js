import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
  Touchable,
} from "react-native";
import { RadioButton, List, Checkbox, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import {NavigationContainer} from '@react-navigation/native';

const Interest = ({navigation}) => {
    const options = [
        { id: 'option1', label: 'Books' },
        { id: 'option2', label: 'Art' },
        { id: 'option3', label: 'Sports' },
        { id: 'option4', label: 'Nature' },
        { id: 'option5', label: 'Tech'},
        { id: 'option6', label: 'Hang-Outs'},
        { id: 'option7', label: 'Other'}   // Add more options here as needed
    ];
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({}); // Use an object to track multiple checkboxes

    const handleCheckboxToggle = (checkboxId) => {
        setSelectedCheckboxes((prev) => ({
        ...prev,
        [checkboxId]: !prev[checkboxId], // Toggle the checkbox state
        }));
        };

        const submitButton = () => {
            navigation.navigate('Homepage')
          };
        
    return(
        <View>
        <Text style={styles.Header1}> Select Your Intrests</Text>
        <View style={styles.form}>
        {options.map((option) => (
        <TouchableOpacity key={option.id} style={styles.button1} onPress={() => handleCheckboxToggle(option.id)}>
        <Text style={styles.textforrsubmit}>{option.label}</Text>
        <Checkbox
        status={selectedCheckboxes[option.id] ? 'checked' : 'unchecked'}
        style={{width: 1000}}
        />
        </TouchableOpacity>
        
        
        ))}
        
        
        <TouchableOpacity style={styles.button1}
        onPress={submitButton}
        >
        <Text style={styles.textforrsubmit}>Submit</Text>
        </TouchableOpacity>
        
        
        </View>
        </View>
        )}

        const styles = StyleSheet.create({
            Header1:{
            fontSize: 30,
            marginHorizontal: 65
            },
            button1:{
            paddingVertical: 10,
            paddingHorizontal: 30,
            backgroundColor: 'blue',
            width:200,
            marginLeft: 70,
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center'
            },
            form:{
            padding: 50,
            },
            textforrsubmit:{
            color: 'white',
            fontSize: 20,
            marginLeft: 45
        }
    });
    
        export default Interest;