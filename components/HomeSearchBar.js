// Home.js
import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	Image,
	SafeAreaView,
	ActivityIndicator,
} from "react-native";
import logo from "../assets/logo.png";
import List from "./List";
import SearchBar from "./SearchBar";

const Home = () => {
	const [searchPhrase, setSearchPhrase] = useState("");
	const [clicked, setClicked] = useState(false);
	const [fakeData, setFakeData] = useState();

	// get data from the fake api endpoint
	useEffect(() => {
		const getData = async () => {
			const apiResponse = await fetch("");
			const data = await apiResponse.json();
			setFakeData(data);
		};
		getData();
	}, []);

	return (
		<SafeAreaView style={styles.root}>
			{!clicked && <Image style={styles.title} source={logo}></Image>}

			<SearchBar
				searchPhrase={searchPhrase}
				setSearchPhrase={setSearchPhrase}
				clicked={clicked}
				setClicked={setClicked}
			/>
			{
				<List
					searchPhrase={searchPhrase}
					data={fakeData}
					setClicked={setClicked}
				/>
			}
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	root: {
		alignItems: "center",
		marginTop: 10,
		marginBottom: -100,
	},
	title: {
		width: "17%",
		height: "17%",
		marginLeft: -250,
		fontWeight: "bold",
	},
});
