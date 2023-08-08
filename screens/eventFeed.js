import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	StyleSheet,
	View,
	Span,
	Button,
	Switch,
	FlatList,
	StatusBar,
	Text,
	ScrollView,
	alwaysBounceHorizontal,
	TouchableOpacity,
	Image,
	SafeAreaView,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { Avatar, Card } from "react-native-paper";
import Home from "../components/HomeSearchBar";
import { blue, white } from "react-native-ios-kit/src/styles/colors";
import BookPhoto from "../components/pictures";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import infopage from "./InfoPage";

const baseUrl = "http://localhost:8080";

export default function EventFeed({ navigation }) {
	const [data, setData] = useState([]);
	const [selectedLanguage, setSelectedLanguage] = useState();

	useEffect(() => {
		async function getData() {
			try {
				axios.get(`${baseUrl}/events/browse`).then((response) => {
					setData(response.data);
				});
			} catch (err) {
				console.log(err);
			}
		}

		getData();
	}, []);

	const registerButton = () => {
		navigation.navigate("InfoPage");
	};

	const svgHang = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
	<g clip-path="url(#clip0_350_3561)">
	  <path d="M11.1992 8.2C12.3612 8.2 13.2922 7.262 13.2922 6.1C13.2922 4.938 12.3612 4 11.1992 4C10.0372 4 9.09922 4.938 9.09922 6.1C9.09922 7.262 10.0372 8.2 11.1992 8.2ZM5.59922 8.2C6.76122 8.2 7.69222 7.262 7.69222 6.1C7.69222 4.938 6.76122 4 5.59922 4C4.43722 4 3.49922 4.938 3.49922 6.1C3.49922 7.262 4.43722 8.2 5.59922 8.2ZM5.59922 9.6C3.96822 9.6 0.699219 10.419 0.699219 12.05V13.8H10.4992V12.05C10.4992 10.419 7.23022 9.6 5.59922 9.6ZM11.1992 9.6C10.9962 9.6 10.7652 9.614 10.5202 9.635C11.3322 10.223 11.8992 11.014 11.8992 12.05V13.8H16.0992V12.05C16.0992 10.419 12.8302 9.6 11.1992 9.6Z" fill="black"/>
	</g>
	<defs>
	  <clipPath id="clip0_350_3561">
		<rect width="16.8" height="16.8" fill="white"/>
	  </clipPath>
	</defs>
  </svg>`;

	return (
		<View style={{ backgroundColor: "white", height: "100%" }}>
			<SafeAreaView>
				<ScrollView vertical={true}>
					<Home style={styles.eventFeedPage} />
					<Text style={styles.HeaderNearYou}>Near You</Text>
					<ScrollView horizontal={true}>
						{data?.reverse().map((event) => (
							<Card style={styles.card1}>
								<Image
									source={{
										uri: "https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=",
									}}
									style={styles.image}></Image>
								<View style={{ padding: 10 }}>
									<View style={{ flexDirection: "row" }}>
										<Text style={styles.setFontSizeThree}>
											{event.eventname}
										</Text>
										<SvgXml xml={svgHang} />
									</View>
									<Text style={styles.address}>
										{event.eventaddress + " " + event.city + ", " + event.state}
									</Text>
									<Text style={styles.description}>{event.description}</Text>
									{/* <Text>{event.date}</Text> */}
								</View>
								<View>
									<TouchableOpacity
										style={styles.button1}
										onPress={registerButton}>
										<Text style={styles.RegisterText}>Register</Text>
									</TouchableOpacity>
								</View>
							</Card>
						))}
					</ScrollView>

					<Text style={styles.HeaderNearYou}>Suggested</Text>

					<ScrollView horizontal={true}>
						{data?.reverse().map((event) => (
							<Card style={styles.card1}>
								<Image
									source={{
										uri: "https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=",
									}}
									style={styles.image}></Image>
								<View style={{ padding: 10 }}>
									<View style={{ flexDirection: "row" }}>
										<Text style={styles.setFontSizeThree}>
											{event.eventname}
										</Text>
										<SvgXml xml={svgHang} />
									</View>
									<Text style={styles.address}>
										{event.eventaddress + " " + event.city + ", " + event.state}
									</Text>
									<Text style={styles.description}>{event.description}</Text>
									{/* <Text>{event.date}</Text> */}
								</View>
								<View>
									<TouchableOpacity
										style={styles.button1}
										onPress={registerButton}>
										<Text style={styles.RegisterText}>Register</Text>
									</TouchableOpacity>
								</View>
							</Card>
						))}
					</ScrollView>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		// flex: -1,
		// justifyContent: "center",
		// alignItems: "center",
		// width: "100%",
		// height: "100%",
	},
	image: {
		width: 230,
		height: 130,
		margin: 0,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	address: {
		color: "gray",
	},
	description: {
		fontSize: 10,
	},
	card1: {
		margin: 20,
		fontSize: 25,
		height: 250,
		width: 230,
		backgroundColor: "white",
		shadowColor: "#000", // Shadow color
		shadowOffset: { width: 0, height: 2 }, // Shadow offset
		shadowOpacity: 0.25, // Shadow opacity
		shadowRadius: 3.84, // Shadow blur radius
		elevation: 5, // For Android shadow
		marginBottom: 100,
	},
	setFontSizeTwo: {
		fontSize: 20,
	},
	setFontSizeThree: {
		fontSize: 15,
		fontWeight: "bold",
		textAlign: "left",
	},
	setFontSizeFour: {
		fontSize: 40,
		height: 30,
	},
	container2: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		margin: 10,
	},
	ScrollView1: {
		alwaysBounceHorizontal: true,
	},
	button1: {
		backgroundColor: "#3570F9",
		width: 150,
		height: 25,
		borderRadius: 50,
		left: 40,
		justifyContent: "center",
	},
	RegisterText: {
		color: white,
		textAlign: "center",
	},
	HeaderNearYou: {
		fontSize: 25,
		marginLeft: 20,
	},
	eventFeedPage: {
		width: "100%",
		height: "100%",
	},
});
