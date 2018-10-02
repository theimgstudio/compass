import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput {...props} autoCapitalize = "none" underlineColorAndroid="transparent" style = {[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]} />
);

const styles = StyleSheet.create({
    input: {
       width: "100%",
       borderWidth: 1,
       borderColor: "#ddd",
       padding: 5,
       margin: 8
    },
    invalid: {
        borderColor: '#f9b0b0',
        backgroundColor: '#f9e0e0'
    }
});

export default defaultInput;