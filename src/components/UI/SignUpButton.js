import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Fonts } from "../../../src/utils/Fonts";

const signUp = props => (
<View style={styles.container}>    
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style = {styles.mainText} authMode = {props.authMode}>{props.authMode === "login" ? "Don't have an account?" : "Have an account?"} </Text>
            <TouchableOpacity onPress = {props.onPress} activeOpacity={0.9}>
            <Text style = {styles.buttonText} authMode = {props.authMode}>{props.authMode === "login" ? "Sign Up." : "Login."}</Text>
            </TouchableOpacity>
        </View>
</View>
);

const styles = StyleSheet.create({
    mainText: {
        color: "#f8f8f8",
        backgroundColor: "transparent",
        fontFamily: Fonts.Montserrat,
        fontSize: 12
    },
    container: {
        width: "100%",
        padding: 18, 
        alignItems: "center"
        
    },
    button: {
        backgroundColor: "transparent",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    buttonText: {
        color: "#fff",
        fontSize: 12,
        fontFamily: Fonts.MontserratSemiBold
    }
});

export default signUp; 