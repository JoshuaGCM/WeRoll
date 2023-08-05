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
          style={styles.buttonmale}
          value="Male"
          status={checked === "Male" ? "checked" : "unchecked"}
          onPress={() => setChecked("Male")}
        >
          <Text></Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonfemale}
          value="Female"
          status={checked === "Female" ? "checked" : "unchecked"}
          onPress={() => setChecked("Female")}
        >
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonNonBinary}
          value="Non-Binary"
          status={checked === "Non-Binary" ? "checked" : "unchecked"}
          onPress={() => setChecked("Non-Binary")}
        >
          <Text></Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOther}
          value="Other"
          status={checked === "Other" ? "checked" : "unchecked"}
          onPress={() => setChecked("Other")}
        >
          <Text></Text>
        </TouchableOpacity>

        <Text>Option Chosen:{checked}</Text>
      </View>
      
        <TouchableOpacity style={styles.nextButton} onPress={nextButton}>
            <Text style={styles.textfornext} >Next</Text>
        </TouchableOpacity>
        <Text style={styles.maleText}>Male</Text>
        <Text style={styles.femaleText}>Female</Text>
        <Text style={styles.nonbinaryText}>Non-Binary</Text>
        <Text style={styles.otherText}>Other</Text>
      </View>
    
  );
}

const styles = StyleSheet.create({
  Header1: {
    fontSize: 30,
    marginHorizontal: 65,
  },
  buttonmale: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: "blue",
    width: 10,
    marginLeft: -10,
    borderRadius: 50,
    marginBottom: 50

  },
  buttonfemale: {
    paddingVertical: 14,
    paddingHorizontal: 15,
    backgroundColor: "blue",
    width: 10,
    marginLeft: -10,
    borderRadius: 50,
    marginBottom: 50
  },
  buttonNonBinary: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: "blue",
    width: 10,
    marginLeft: -10,
    borderRadius: 50,
    marginBottom: 50
  },
  buttonOther: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: "blue",
    width: 10,
    marginLeft: -10,
    borderRadius: 50,
    marginBottom: 50
  },
  nextButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "blue",
    width: 200,
    marginLeft: 100,
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
  maleText:{
    fontSize: 20,
    marginLeft: 80,
    marginTop: -223,
    marginBottom: 50
  },
  femaleText:{
    fontSize: 20,
    marginLeft: 80,
    marginBottom: 50
  },
  nonbinaryText:{
    fontSize: 20,
    marginLeft: 80,
    marginBottom: 50
  },
  otherText:{
    fontSize: 20,
    marginLeft:80,
    marginBottom: 50
  }
});
