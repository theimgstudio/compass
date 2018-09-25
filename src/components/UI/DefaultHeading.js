import React from 'react';
import { Text, StyleSheet } from 'react-native';

const headingText = props => (
    <Text {...props} style = {styles.textHeading}>{props.children}</Text>
);

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 24,
        fontWeight: '600',
        color: "#af373c"
    }
});
export default headingText;