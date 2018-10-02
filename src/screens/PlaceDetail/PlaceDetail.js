import React , { Component } from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { deletePlace } from "../../store/actions/places";

class PlaceDetail extends Component  {
   
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key); 
        this.props.navigator.pop();
    }

    render ()  {
        return (
            <View style={styles.container}>
                <View>
                    <Image source = {this.props.selectedPlace.image} style = {styles.placeimage} />         
                </View>
                <View>
                <TouchableOpacity onPress = {this.placeDeletedHandler}>
                    <View style={styles.deleteButton}>
                        <Icon size={24} name="trash" color="white"/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
               
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton: {

        alignItems: "center",
        backgroundColor: "red",
        paddingVertical: 5
    }

});

const mapDispatchToProps = dispatch => {

    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);