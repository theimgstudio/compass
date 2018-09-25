import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from "../../components/UI/DefaultInput";
import HeadingText from "../../components/UI/DefaultHeading";
import MainText from "../../components/UI/MainText";
import ButtonLogin from "../../components/UI/ButtonLogin";
import DividerLine from "../../components/UI/DividerLine";
import validate from '../../utils/validation';

//Images 
import backgroundImage from "../../assets/loginBackground.png";
import SignUp from '../../components/UI/SignUpButton';
import { tryAuth } from '../../store/actions/index';

class AuthScreen extends Component {

    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        authMode: "login",
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false   
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false    
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: 'password'
                },
                touched: false    
               }
        }
    };


    constructor(props) {
        super(props);
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
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                authMode: prevState.authMode === "login" ? "signup" : "login"
            };
        });
    };

    loginHandler = () => {
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        };
        this.props.onLogin();
        startMainTabs();

    };

    updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
          const equalControl = this.state.controls[key].validationRules.equalTo;
          const equalValue = this.state.controls[equalControl].value;
          connectedValue = {
            ...connectedValue,
            equalTo: equalValue
          };
        }
        if (key === "password") {
          connectedValue = {
            ...connectedValue,
            equalTo: value
          };
        }
        this.setState(prevState => {
          return {
            controls: {
              ...prevState.controls,
              confirmPassword: {
                ...prevState.controls.confirmPassword,
                valid:
                  key === "password"
                    ? validate(
                        prevState.controls.confirmPassword.value,
                        prevState.controls.confirmPassword.validationRules,
                        connectedValue
                      )
                    : prevState.controls.confirmPassword.valid
              },
              [key]: {
                ...prevState.controls[key],
                value: value,
                valid: validate(
                  value,
                  prevState.controls[key].validationRules,
                  connectedValue
                )
              }
            }
          };
        });
      };

    render () {
        let headingText = null;
        let confirmPasswordControl = null; 

        if (this.state.viewMode === "portrait") {
            headingText = (
                <MainText><HeadingText>Login</HeadingText></MainText>
            );
        }
        if (this.state.authMode === "signup") {
            confirmPasswordControl = <View style = {this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
            <DefaultInput placeholder="Confirm Password" 
            style = {styles.input} 
            value = {this.state.controls.confirmPassword.value} 
            onChangeText = {val => this.updateInputState("confirmPassword", val)}
            valid = {this.state.controls.confirmPassword.valid}
            touched = {this.state.controls.confirmPassword.touched}
            secureTextEntry/>
        </View>
        }
        return(
            <ImageBackground source = {backgroundImage} style={styles.backgroundImage}>
                <KeyboardAvoidingView style={styles.container} behavior = "padding">
                    <View style = {styles.loginBox}>
                        {headingText}
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style = {styles.inputContainer}>
                            <DefaultInput placeholder ="Email Address" 
                            style = {styles.input} 
                            value = {this.state.controls.email.value} 
                            onChangeText = {val => this.updateInputState("email", val)}
                            valid = {this.state.controls.email.valid}
                            touched = {this.state.controls.email.touched}
                            autoCorrect = {false}
                            keyboardType = {'email-address'}/>
                        
                        <View style = {this.state.viewMode === "portrait" || this.state.authMode === "login" ? styles.portraitPasswordContainer : styles.landscapePasswordContainer}>
                        <View style = {this.state.viewMode === "portrait" || this.state.authMode === "login" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                            <DefaultInput placeholder="Password" 
                            style = {styles.input} 
                            value = {this.state.controls.password.value}
                            onChangeText={val => this.updateInputState("password", val)}
                            valid = {this.state.controls.password.valid}
                            touched = {this.state.controls.password.touched}
                            secureTextEntry/>
                        </View>
                        {confirmPasswordControl}
                        </View>
                        
                            <ButtonLogin 
                            disabled = {!this.state.controls.confirmPassword.valid && this.state.authMode === "signup" || !this.state.controls.password.valid || !this.state.controls.email.valid} 
                            color = "#af373c" 
                            onPress = {this.loginHandler}>Sign In</ButtonLogin>
                        </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <SignUp onPress = {this.switchAuthModeHandler} authMode = {this.state.authMode}/>
                    <DividerLine> or </DividerLine>
                </KeyboardAvoidingView>
            </ImageBackground>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        width: "90%",
        paddingTop: 5,
        alignItems:"center",
        
        
    },
    input: {
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 2,
        borderColor: "transparent",
        borderBottomColor: "#777777"
        
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-between"
    },
    landscapePasswordWrapper: {
        width: "45%",
        alignItems: "center"
    },
    portraitPasswordWrapper: {
        width:"100%",
        alignItems: "center"
    },
    loginBox: {
        backgroundColor: "#f8f8f8",
        borderRadius: 20,
        alignItems: "center",
        padding: 15,
        width: "75%"
    }
    
});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (authData) => dispatch(tryAuth(authData))
    };
};

export default connect(null, mapDispatchToProps)(AuthScreen);