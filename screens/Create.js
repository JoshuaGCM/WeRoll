import React, { useState, useEffect, Component } from "react";
import {
	StyleSheet,
	View,
	Platform,
	Button,
	Pressable,
	TouchableOpacity,
	Text,
	Image,
	SafeAreaView,
	TextInput,
	Alert,
} from "react-native";
import { Avatar, Card } from "react-native-paper";
import Buttonn from "../components/button";
import Buttonnn from "../components/button2";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import CategoryPicker from "../components/CategoryPicker";
import * as ImagePicker from "expo-image-picker";
// const image1 = "add Ur link "

const TextInputExample = () => {
	const [text, onChangeText] = React.useState("");
	const [number, onChangeNumber] = React.useState("");

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

export default function Create() {
	const [pick, onChangePick] = useState(false);
	const [eventName, setEventName] = useState("");
	const [eventNumber, setEventNumber] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [description, setDescription] = useState("");
	const [maxCapacity, setMaxCapacity] = useState("");
	const [date, setDate] = useState("");
	const [categories, setCategories] = useState("");
	const [picture, setPicture] = useState("");
	const [image, setImage] = useState(null);

	const baseUrl = "http://localhost:8080";

	const [selectedLanguage, setSelectedLanguage] = useState();

	const ButtonPress = () => {
		async function pushData() {
			try {
				await axios
					.post(`${baseUrl}/events/create`, {
						eventname: eventName,
						eventaddress: eventNumber,
						zipcode: zipCode,
						city: city,
						state: state,
						phonenumber: phoneNumber,
						description: description,
						maxcapacity: maxCapacity,
						date: date,
						category: categories,
						picture: picture,
					})
					.then((response) => {
						console.log(response.data);
					});
			} catch (err) {
				console.log(err);
			}
		}
		pushData();
	};

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<View>
			<View>
				<TextInput
					style={styles.input}
					onChangeText={setEventName}
					value={eventName}
					placeholder="Name of Event"
					keyboardType="numeric"
				/>
				{/* Touchable on change should show picker logicv error here */}
				<TouchableOpacity
					onPress={() => {
						onChangePick(!pick);
						onPress(<CategoryPicker />);
						console.log(pick);
						{
							pick && <CategoryPicker />;
						}
					}}>
					<Text style={styles.input10}>Category</Text>
				</TouchableOpacity>

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

				<TouchableOpacity onPress={pickImage} style={styles.ImageButton}>
					<Text style={styles.ImageText}>Add An Image (Optional)</Text>
				</TouchableOpacity>
				{image && (
					<Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
				)}
				<TouchableOpacity style={styles.button1} onPress={ButtonPress}>
					<Text style={styles.buttontext}> Create Event </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 50,
		width: 400,
		margin: 15,
		borderWidth: 2,
		padding: 10,
		fontSize: 15,
		marginTop: 10,
	},
	input2: {
		height: 50,
		width: 400,
		margin: 15,
		borderWidth: 2,
		padding: 10,
		fontSize: 15,
	},
	input3: {
		height: 50,
		width: 165,
		margin: 15,
		borderWidth: 2,
		padding: 10,
		fontSize: 15,
	},
	input4: {
		height: 50,
		width: 165,
		margin: 15,
		borderWidth: 2,
		padding: 10,
		fontSize: 15,
		marginTop: -55,
		margin: 250,
	},
	input5: {
		height: 50,
		width: 165,
		margin: 15,
		borderWidth: 2,
		padding: 10,
		fontSize: 15,
		marginTop: -220,
	},
	input6: {
		height: 50,
		width: 165,
		margin: 15,
		borderWidth: 2,
		padding: 10,
		fontSize: 15,
		marginTop: -65,
		margin: 250,
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
	input8: {
		height: 50,
		width: 400,
		margin: 15,
		borderWidth: 2,
		padding: 10,
		fontSize: 15,
	},
	input9: {
		height: 50,
		width: 165,
		margin: 15,
		borderWidth: 2,
		padding: 10,
		fontSize: 15,
		marginTop: -405,
		margin: 250,
	},
	button1: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "black",
		width: 300,
		margin: 65,
		marginTop: 100,
	},
	buttontext: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
	button2: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "black",
		width: 400,
		margin: 15,
		marginTop: 80,
	},
	input10: {
		height: 40,
		width: 400,
		margin: 15,
		borderWidth: 2,
		padding: 10,
		fontSize: 15,
	},
	ImageButton: {
		paddingVertical: 1,
		paddingHorizontal: 20,
		backgroundColor: "blue",
		width: 200,
		marginLeft: 70,
		borderRadius: 50,
		flexDirection: "row",
		alignItems: "center",
		marginTop: 1,
	},
	ImageText: {
		fontSize: 20,
		color: "white",
	},
});
