import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Button,
  Switch,
  FlatList,
  StatusBar,
  Text
} from "react-native";
import { Avatar, Card } from "react-native-paper";
import Home from "../components/HomeSearchBar";

const baseUrl = "http://localhost:8080";

const DATA = [{

}]

export default function EventFeed() {
  const [data, setData] = useState([]);

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
	  {data?.reverse().map(event=><Card style={styles.card1}>
		<Text style={styles.setFontSizeThree}>{event.eventname}</Text>
		<Text>{event.eventaddress}</Text>
		<Text>{event.city}</Text>
		<Text>{event.state}</Text>
		<Text>{event.description}</Text>
		<Text>{event.date}</Text>
		</Card>)}
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
    height: 115,
    width: 350,
  },
  button1: {
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
  }
});
