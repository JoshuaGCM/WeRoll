import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { Card } from "react-native-paper";
import Home from "../components/HomeSearchBar";
import { white } from "react-native-ios-kit/src/styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const baseUrl = "http://localhost:8080";

export default function EventFeed({ navigation }) {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${baseUrl}/events/browse`);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  const registerButton = (event) => {
    setSelectedEvent(event);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <SafeAreaView>
        <ScrollView vertical={true}>
          <Home style={styles.eventFeedPage} />
          <Text style={styles.HeaderNearYou}>Near You</Text>
          <ScrollView horizontal={true}>
            {data?.reverse().map((event) => (
              <Card style={styles.card1} key={event.id}>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=",
                  }}
                  style={styles.image}
                />
                <View style={{ padding: 10 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.setFontSizeThree}>
                      {event.eventname}
                    </Text>
                  </View>
                  <Text style={styles.address}>
                    {event.eventaddress + " " + event.city + ", " + event.state}
                  </Text>
                  <Text style={styles.description}>{event.description}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={() => registerButton(event)}
                  >
                    <Text style={styles.RegisterText}>Register</Text>
                  </TouchableOpacity>
                </View>
              </Card>
            ))}
          </ScrollView>
          <Text style={styles.HeaderNearYou}>Suggested</Text>
          <ScrollView horizontal={true}>
            {data?.reverse().map((event) => (
              <Card style={styles.card1} key={event.id}>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=",
                  }}
                  style={styles.image}
                />
                <View style={{ padding: 10 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.setFontSizeThree}>
                      {event.eventname}
                    </Text>
                  </View>
                  <Text style={styles.address}>
                    {event.eventaddress + " " + event.city + ", " + event.state}
                  </Text>
                  <Text style={styles.description}>{event.description}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={() => registerButton(event)}
                  >
                    <Text style={styles.RegisterText}>Register</Text>
                  </TouchableOpacity>
                </View>
              </Card>
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
      {/* Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {selectedEvent?.eventname}
          </Text>
          {/* Display additional event details */}
          <Text>{selectedEvent?.eventaddress}</Text>
          <Text>{selectedEvent?.description}</Text>
          <Button title="Close Modal" onPress={closeModal} />
        </View>
      </Modal>
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
  modalContent:{
    top:"50%"
  }
});
