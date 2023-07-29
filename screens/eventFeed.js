import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Button,
  Switch,
  FlatList,
  StatusBar,
} from "react-native";
import { Avatar, Card } from "react-native-paper";
import Home from "../components/HomeSearchBar";



const baseUrl = "http://localhost:8080";

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
      <Card style={styles.card1}>{console.log(data)}</Card>
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
    height: 100,
    width: 350,
  },
  button1: {
    justifyContent: "flex-start",
  },
  setFontSizeOne: {
    fontSize: 15,
  },
  setFontSizeTwo: {
    fontSize: 20,
  },
  setFontSizeThree: {
    fontSize: 25,
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
  container3: {
    height: 10,
    margin: 200,
  },
});
