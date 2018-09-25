import React, {Component} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DefaultInput from '../UI/DefaultInput';

const placeInput = props => ( 

      <DefaultInput 
        placeholder="Place Name" 
        style = {styles.placeholder} 
        value = {props.placeName} 
        onChangeText = {props.onChangeText}
      />
);

const styles = StyleSheet.create( {
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
}
});

export default placeInput;