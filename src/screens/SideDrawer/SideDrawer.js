import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import { Fonts } from '../../utils/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';

class SideDrawer extends Component { 

    render () {
        return (
            <View style = {[styles.container, {width: Dimensions.get("window").width * 0.8}]}>
                <View style = {styles.sideDrawerHeader}>
                    <Text style = {styles.headerText}> Side Drawer </Text>
                </View>
                <TouchableOpacity onPress = {() => alert("Logout!")} activeOpacity={0.8}>
                    <View style = {styles.menuButton}>                        
                        <Icon name = "sign-out" size = {16} style = {styles.buttonIcon}/>
                        <Text style = {styles.buttonText}>  Logout  </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: "white",
        flex: 1,
    },
    headerText: {
        fontSize: 18,
        color: "#444",
        fontFamily: Fonts.MontserratSemiBold
    },
    closeButton: {
        color: "#444",
        
    },
    buttonIcon: {
        color: "#777",
        fontSize: 20,
        paddingLeft: "2.5%"
        
    },
    buttonText: {
        color: "#444",
        fontFamily: Fonts.MontserratSemiBold,
        fontSize: 16
    },
    sideDrawerHeader: {
        flexDirection: "row",
        flexWrap: "wrap", 
        paddingLeft: "7.5%",
        paddingTop: 15,
        paddingBottom: 22
    }, 
    menuButton: {
        backgroundColor: "#f8f8f8",
        borderColor: "#ddd",
        borderTopWidth: 1, 
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: "row",
        flexWrap: "wrap" 
    }

});
export default SideDrawer;