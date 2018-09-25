import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Fonts } from "../../../src/utils/Fonts";

const mainText = props => (

    <Text style={styles.mainText}>{props.children}</Text>
);

const styles = StyleSheet.create({
    mainText: {
        color: "#f8f8f8",
        backgroundColor: "transparent",
        fontFamily: Fonts.MontserratBold
    }
});

export default mainText;