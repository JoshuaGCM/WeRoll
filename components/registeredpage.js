import React from 'react';
import { View, Text, Modal, Button, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const PitModal = ({ data, isModalVisible, handleModal }) => {
    const navigation = useNavigation();
  
    if (!data) {
      return null;
    }
  
    const handleChallenge = (exerciseId) => {
      handleModal();
      navigation.navigate('Chat', { id: exerciseId });
    };
  
    return (
      <Modal isVisible={isModalVisible} onBackdropPress={handleModal} animationIn="fadeInRightBig">
        <View style={styles.modalContent}>
          <View style={styles.ModalContentContainer}>
            <TouchableOpacity style={styles.exitButton} onPress={handleModal}>
              <Text style={styles.exitButtonText}>Exit Arena</Text>
            </TouchableOpacity>
            <FlatList
              data={data.challenges} // Replace 'challenges' with the actual data property
              keyExtractor={(item) => item.id.toString()} // Adjust the key extractor
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <View style={styles.blueBackground}>
                    <Image source={item.image} style={styles.rankImage} />
                    <Text style={styles.exerciseText}>{item.name}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.challengeButton}
                    onPress={() => handleChallenge(item.id)}>
                    <Text>Challenge</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </Modal>
    );
  };
  
const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: '#645F5F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalContentContainer: {
    marginTop: '10%',
    maxWidth: '100%',
    width: '100%',
  },
  itemContainer: {
    width: '90%',
    marginBottom: 20,
  },
  blueBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
  },
  exerciseText: {
    marginBottom: 10,
    fontSize: 16,
  },
  rankImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  challengeButton: {
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    alignItems:'center',
  },
  exitButton: {
    backgroundColor: 'red', // Or any color you prefer
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  exitButtonText: {
    color: 'white', // Text color
    fontSize: 16,
  },
  
});
export default PitModal;