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

export default function Question({navigation}) {
  const [checked, setChecked] = React.useState("N/A");

  const [selectedCheckboxes, setSelectedCheckboxes] = useState({}); // Use an object to track multiple checkboxes
  const options = [
    { id: "option1", label: "Books" },
    { id: "option2", label: "Art" },
    { id: "option3", label: "Sports" },
    { id: "option4", label: "Nature" },
    { id: "option5", label: "Tech" },
    { id: "option6", label: "Hang-Outs" },
    { id: "option7", label: "Other" },

    // Add more options here as needed
  ];
  const handleCheckboxToggle = (checkboxId) => {
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [checkboxId]: !prev[checkboxId], // Toggle the checkbox state
    }));
  };

  const nextButton = () => {
    navigation.navigate('Interests')
  }

  return (
    <View>
      <Text style={styles.Header1}> Whats Your Gender</Text>
      <View style={styles.form}>
        <TouchableOpacity
          styles={{ flex: 1 }}
          value="Male"
          status={checked === "Male" ? "checked" : "unchecked"}
          onPress={() => setChecked("Male")}
        >
          <Text>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          styles={{ flex: 1 }}
          value="Female"
          status={checked === "Female" ? "checked" : "unchecked"}
          onPress={() => setChecked("Female")}
        >
          <Text>Female</Text>
        </TouchableOpacity>

        <TouchableOpacity
          styles={{ flex: 1 }}
          value="Non-Binary"
          status={checked === "Non-Binary" ? "checked" : "unchecked"}
          onPress={() => setChecked("Non-Binary")}
        >
          <Text>Non-Binary</Text>
        </TouchableOpacity>

        <TouchableOpacity
          styles={{ flex: 1 }}
          value="Other"
          status={checked === "Other" ? "checked" : "unchecked"}
          onPress={() => setChecked("Other")}
        >
          <Text>Other</Text>
        </TouchableOpacity>

        <Text>Option Chosen:{checked}</Text>
      </View>
      
        <TouchableOpacity style={styles.button1} onPress={nextButton}>
            <Text style={styles.textfornext} >Next</Text>
        </TouchableOpacity>
      </View>
    
  );
}

const styles = StyleSheet.create({
  Header1: {
    fontSize: 30,
    marginHorizontal: 65,
  },
  Radio1: {
    color: "blue",
  },
  button1: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "blue",
    width: 200,
    marginLeft: 70,
    borderRadius: 50,
  },
  form: {
    padding: 50,
  },
  textfornext: {
    color: "white",
    fontSize: 20,
    marginLeft: 50,
  },
});
