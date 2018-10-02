import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';
import { Fonts } from '../../utils/Fonts';

class FindPlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: "#f8f8f8",
        navBarBackgroundColor: "#a12e32",
        navBarTextColor: '#f8f8f8'
    }
    
    state = {
        placesLoaded: false,
        removeAnim: new Animated.Value(1),
        addAnim: new Animated.Value(0)
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

    }

    onNavigatorEvent = event => {

        if(event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left",
                    animated: 'true'
                });
            }
        }
    }

    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });

        this.props.navigator.push({
            screen: "awesome-places.PlaceDetailScreen",
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace
            }
        });
        
    }
    placesLoadedHandler = () => {
        Animated.timing(this.state.addAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();

    }

    placesSearchHandler = () => {
        Animated.timing(this.state.removeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
        }).start(() => {
            this.setState({
                placesLoaded: true
            });
            this.placesLoadedHandler();
        });

    }

    render () {
        let content = (
            <Animated.View style = {{opacity: this.state.removeAnim,  transform: [
                {
                    scale: this.state.removeAnim.interpolate({
                        inputRange: [0,1],
                        outputRange: [1.5, 1]
                    })
                }
            ]}}>
            <TouchableOpacity onPress={this.placesSearchHandler}>
                <View style = {styles.searchButton}>
                    <Text style = {styles.searchButtonText}>Find Places</Text>
                </View>
            </TouchableOpacity>
            </Animated.View>
        );
        if (this.state.placesLoaded) {
            content = (
                <Animated.View style = {{opacity: this.state.addAnim}}>
                    <PlaceList places = {this.props.places} onItemSelected = {this.itemSelectedHandler}/>
                </Animated.View>
            );
        }
        return (
           
                <View style = {this.state.placesLoaded ? null : styles.buttonContainer}>
                     
            {content}
            
                </View>
            
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton: {
        backgroundColor: "#666666",
        padding: 20,
        
    },
    searchButtonText: {
        fontFamily: Fonts.MontserratSemiBold,
        color: "white"
    }

});

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);