import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Button,
  Switch,
  FlatList,
  StatusBar,
  Text,
  ScrollView,
  alwaysBounceHorizontal,
  TouchableOpacity,
  Image
} from "react-native";
import { Avatar, Card } from "react-native-paper";
import Home from "../components/HomeSearchBar";
import { blue, white } from "react-native-ios-kit/src/styles/colors";
import BookPhoto from "../components/pictures";

const baseUrl = "http://localhost:8080";

export default function EventFeed() {
  const [data, setData] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    async function getData() {
      try {
        await axios
          .get(`${baseUrl}/events/browse`)
          .then((response) => {
            setData(response.data);
          })
      } catch (err) {
        console.log(err);
      }
    }

	getData();
  }, []);

  return (
    <View>
      <Home />
	  <Text style={styles.HeaderNearYou}>Near You</Text>
	  <ScrollView
	  horizontal={true}
	  >
	  {data?.reverse().map(event=><Card style={styles.card1}>
		<Text style={styles.setFontSizeThree}>{event.eventname}</Text>
		<Text>{event.eventaddress}</Text>
		<Text>{event.city}</Text>
		<Text>{event.state}</Text>
		<Text>{event.description}</Text>
		<Text>{event.date}</Text>
		<TouchableOpacity style={styles.button1}>
			<Text style={styles.RegisterText}>Register</Text>
		</TouchableOpacity>
		</Card>)}
		</ScrollView>

		<Text style={styles.HeaderNearYou}>
			Suggested
		</Text>

		<ScrollView
		horizontal={true}
		>

		{data?.reverse().map(event=><Card style={styles.card1}>
		<Text style={styles.setFontSizeThree}>{event.eventname}</Text>
		<Text>{event.eventaddress}</Text>
		<Text>{event.city}</Text>
		<Text>{event.state}</Text>
		<Text>{event.description}</Text>
		<Text>{event.date}</Text>
		<TouchableOpacity style={styles.button1}>
			<Text style={styles.RegisterText}>Register</Text>
		</TouchableOpacity>
		</Card>)}

		<Image source={{uri: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=pexels-caio-46274.jpg&fm=jpg'}}/>

		</ScrollView>

		
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: -1,
    justifyContent: "center",
    alignItems: "center",
  },
  card1: {
    margin: 20,
    fontSize: 25,
    height: 155,
    width: 350,
  },
  button: {
    justifyContent: "flex-start",
  },
  setFontSizeTwo: {
    fontSize: 20,
  },
  setFontSizeThree: {
    fontSize: 20,
	marginHorizontal: 60
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
  title:{
	margin: 10
  },
  ScrollView1: {
	alwaysBounceHorizontal: true
  },
  button1:{
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'blue',
    width:200,
	marginLeft: 70,
	borderRadius: 50
  },
  RegisterText:{
	color: white,
	marginLeft: 40
  },
  HeaderNearYou:{
	fontSize: 20,
	marginLeft: 20,
	marginTop: -20
  }
});
