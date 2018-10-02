import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Text, View, StyleSheet, Platform } from 'react-native';
import { Fonts } from "../../utils/Fonts"

const buttonLogin = props => {
   
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}, props.disabled ? styles.disabled : null]}>
        <Text style = {styles.buttonText}>{props.children}</Text>
        </View>
    );

    if (props.disabled) {
        return content;
    }

    if (Platform.OS === 'android') {
        return(
            <TouchableNativeFeedback onPress = {props.onPress}> 
                {content}
            </TouchableNativeFeedback>
        );

    }
    return(
        <TouchableOpacity onPress = {props.onPress} activeOpacity={0.9}>
            {content}
        </TouchableOpacity>
    );

    
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#af373c",
        padding: 5,
        margin: 8, 
        minWidth: "100%",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "transparent",
        alignItems: "center"       
    },
    buttonText: {
        color: "#fff",
        fontFamily: Fonts.Montserrat
    },
    disabled: {
        backgroundColor: "#ccc"
    }
});
export default buttonLogin;