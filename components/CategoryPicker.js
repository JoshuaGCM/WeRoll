import { Text } from "react-native";
import React,{useState,useEffect} from 'react';
import { StyleSheet, View,Button,Pressable, TouchableOpacity } from 'react-native';
import { Avatar, Card,} from 'react-native-paper';
import {SafeAreaView, TextInput} from 'react-native';
import Buttonn from "../components/button";
import Buttonnn from "../components/button2";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { Picker } from "@react-native-picker/picker";



export default function CategoryPicker(){
    const [selectedLanguage, setSelectedLanguage] = useState();
    return(
        <View>
    <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Los Angeles" value="LA" />
  <Picker.Item label="Bakersfield" value="Bakers" />
</Picker>
</View>
)}


