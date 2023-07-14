import React,{useState,useEffect} from 'react';
import MapView ,{Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Toolbar } from 'react-native-ios-kit';
import * as Location from 'expo-location';

export default function App() {
  {/*Location data */}
  const [mapRegion,setMapRegion] = useState(null);
  const userLocation = async () =>{
    let{status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setMapRegion
  }
  return (
    
    

    <View style={styles.container}>
      {/*Tool bar at the bottom */}
      <Toolbar
  items={[
    {
      icon: 'ios-arrow-back',
      onPress: this.runAction,
    },
    {
      icon: 'ios-arrow-forward',
      onPress: this.runAction,
    },
    {
      icon: 'ios-refresh',
      onPress: this.runAction,
    },
    {
      icon: 'ios-share-outline',
      onPress: this.runAction,
      disabled: true,
    },
  ]}
/>
{/*Map */}
      <MapView style={styles.map} region ={mapRegion}>
        <Marker coordinate={mapRegion} title ='Marker'/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '94%',
  },
});
