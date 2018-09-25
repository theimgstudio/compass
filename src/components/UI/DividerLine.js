import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Hr from 'react-native-hr-plus';
import { Fonts } from "../../../src/utils/Fonts";

const dividerLine = props => (
<View style={styles.container}>
<Hr color = "white" width= {1}>
    <Text style={styles.mainText}>{props.children}</Text>
</Hr>
</View>
);

const styles = StyleSheet.create({
    mainText: {
        color: "#f8f8f8",
        backgroundColor: "transparent",
        fontFamily: Fonts.Montserrat,
        fontSize: 14,
        paddingLeft: "7.5%",
        paddingRight: "7.5%"
    },
    container: {
        width: "85%"
    }
});

export default dividerLine; 