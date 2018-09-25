import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Dimensions } from 'react-native';

import imagePlaceholder from "../../assets/yosemite.jpg";
import MapView from 'react-native-maps';

class PickLocation extends Component {
    state = {

            focusedLocation: {
                latitude: 29.421444,
                longitude: -98.486400,
                latitudeDelta: 0.00522,
                longitudeDelta: Dimensions.get("window").width / 
                Dimensions.get("window").height * 0.00522
            }
        
    }

    render () {
    return (
        <View style = {styles.container}>
            <MapView 
                initialRegion={this.state.focusedLocation} 
                style = {styles.map}
            />
            <View style = {styles.buttonView}>
                <Button title = "Locate Me" onPress = {() => alert("Locate Me!")}/>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    map: {
        width: "100%",
        height: 250
    },
    buttonView: {
        margin: 8
    }

});

export default PickLocation;

