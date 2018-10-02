import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from "../../store/actions/index";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import MainText from "../../components/UI/MainText";
import HeadingText from "../../components/UI/DefaultHeading";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: "#f8f8f8",
        navBarBackgroundColor: "#a12e32",
        navBarTextColor: '#f8f8f8'

    }

    state = {

        placeName: "",
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"

    };
    
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        Dimensions.addEventListener("change", this.updateStyles);

    }


    componentWillUnmount() {

        Dimensions.removeEventListener("change", this.updateStyles);
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"

        });

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

    placeAddedHandler = () => {
        if (this.state.placeName.trim() !== "") {
            this.props.onAddPlace(this.state.placeName);
        }
    };
    
    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    }

    render () {
        return ( 
            <ScrollView>
                <View style={styles.container}>
                <MainText><HeadingText>Share a Place With Us!</HeadingText></MainText>
                    <View style = {this.state.viewMode === "portrait" ? styles.portraitContainer : styles.landscapeContainer}>
                    <View style = {this.state.viewMode === "portrait" ? styles.portraitWrapper : styles.landscapeWrapper}>           
                            <ImagePicker/>
                        </View>
                        <View style = {this.state.viewMode === "portrait" ? styles.portraitWrapper : styles.landscapeWrapper} >
                            <PickLocation/>
                        </View>
                    </View>
                    <PlaceInput placeName={this.state.placeName} onChangeText = {this.placeNameChangedHandler}></PlaceInput>
                    <View style = {styles.buttonView}>
                    <Button title = "Share the Place!" onPress = {this.placeAddedHandler} disabled = {this.state.placeName === ""}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    buttonView: {
        margin: 8
    },
    landscapeContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingTop: 15

    },
    portraitContainer: {
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-between",
        paddingTop: 15
    },
    landscapeWrapper: {
        width: "45%",
        flexDirection: "row",
        justifyContent: "center"

    },
    portraitWrapper: {
        width: "100%",
        flexDirection: "column",
        flex: 1,
        alignItems: "center"
    }

});


const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);