import React,{useState,useEffect} from 'react';
import { StyleSheet, View,Button,Pressable, TouchableOpacity, Text, SafeAreaView, TextInput } from 'react-native';
import { Avatar, Card, RadioButton} from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { Picker } from "@react-native-picker/picker";

export default function Question(){
    const [checked, setChecked] = React.useState('N/A')
    return(
        <View>
            <Text style={styles.Header1}> Whats your gender?</Text>
            <RadioButton
            styles={styles.Radio1}
            value="Male"
            status={checked === 'Male' ? 'checked':'unchecked'}
            onPress={()=> setChecked('Male')}
            />
            <RadioButton
            value="Female"
            status={checked === 'Female' ? 'checked':'unchecked'}
            onPress={()=> setChecked('Female')}
            />
            <RadioButton
            value="Non-Binary"
            status={checked === 'Non-Binary' ? 'checked':'unchecked'}
            onPress={()=> setChecked('Non-Binary')}
            />
            <RadioButton
            value="Other"
            status={checked === 'Other' ? 'checked':'unchecked'}
            onPress={()=> setChecked('Other')}
            />
            <Text> {checked}</Text>




        </View>
    )
}

const styles = StyleSheet.create({
    Header1:{
        fontSize: 30,
        marginHorizontal: 65
    },
    Radio1:{

    }

});




