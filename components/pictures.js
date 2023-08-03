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
  import React,{useState,useEffect, Component} from 'react';

  export default function BookPhoto(){
    return(
  <Image source={{uri: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=pexels-caio-46274.jpg&fm=jpg'}}/>
  )}
