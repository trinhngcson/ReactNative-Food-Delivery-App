import React, {useState, useRef, useContext} from "react";

import {View, Text, StyleSheet, Dimensions, TextInput, Alert} from "react-native";

import { COLORs, PARAMETERs, title } from "../../global/styles";

import { Icon,Button,SocialIcon, withTheme } from "react-native-elements";

import Header from "../../components/Header";

import * as Animatable from 'react-native-animatable';

import HomeScreen from "../HomeScreen";

import { Formik } from "formik";

import auth from "@react-native-firebase/auth";

import { SignInContext } from "../../contexts/authContext";

const initialValues = {email:'',password:''}

export default function SigninScreen({navigation}){

    const {dispatchSignedIn} = useContext(SignInContext)

    const[textInput1Focused,setTextInput1Focused] = useState(false)
    const[textInput2Focused,setTextInput2Focused] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    async function signIn(data) {
        const {password,email} = data
        if (password != "" || email != ""){
            try{           
                const user = await auth().signInWithEmailAndPassword(email,password)
                if(user){
                    dispatchSignedIn({type: "UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
                }
                for (value in initialValues){
                    console.log(initialValues[value])
                }
            }
            catch(error){
                if (error.message.includes("auth/wrong-password"))
                    Alert.alert(error.name, "Wrong password or email not exist")
            }
        }
        else{
            Alert.alert("Error","Fill the fields")
        }
    }      

    return (
        <View style = {styles.container}>
            <Header title = "MY ACCOUNT" type = "arrow-left" navigation = {navigation}/>
            <View style = {{marginLeft: 20, marginTop:10}}>
                <Text style = {title}>Sign In</Text>
            </View>
            <View style = {{alignItems: "center", marginTop: 10}}>
                <Text style = {styles.text1}>Please enter the email and password</Text>
                <Text style = {styles.text1}>registered with your accout</Text>
            </View>
            <Formik
                initialValues = {initialValues}
                onSubmit = {(values) => {
                    signIn(values)
                }}
            >
            { (props) =>
            <View>
            <View style = {{marginTop:20}}>
                <View style = {styles.textInput1}>
                    <Animatable.View animation ={textInput1Focused ? "" : "fadeInLeft"} duration = {400}>
                        <Icon
                            name = "person"
                            iconStyle = {{color:COLORs}}
                            type = "material"
                        />
                    </Animatable.View > 
                    <TextInput 
                        style = {{width: "80%", marginLeft: 5}}
                        placeholder = "Email"
                        ref = {textInput1}
                        onFocus = {() => {
                            setTextInput1Focused(false)
                        }}

                        onBlur = {() => {
                            setTextInput1Focused(true)
                        }}
                        onChangeText = {props.handleChange('email')}
                        value = {props.values.email}
                    />
                </View>
                <View style = {styles.textInput2}>
                    <Animatable.View animation ={textInput2Focused ? "" : "fadeInLeft"} duration = {400}>
                        <Icon
                            name = "lock"
                            iconStyle = {{color:COLORs}}
                            type = "material"
                        />
                    </Animatable.View>
                        <TextInput 
                            secureTextEntry={true}
                            placeholder = "Password"
                            style = {{width: "80%"}}
                            ref = {textInput2}
                            onFocus = {() => {
                                setTextInput2Focused(false)
                            }}

                            onBlur = {() => {
                                setTextInput2Focused(true)
                            }}
                            onChangeText = {props.handleChange('password')}
                            value = {props.values.password}
                        />
                    <Animatable.View animation ={textInput2Focused ? "" : "fadeInLeft"} duration = {400}>
                        <Icon
                            name = "visibility-off"
                            iconStyle = {{color:COLORs}}
                            type = "material"
                            style = {{marginRight: 10}}
                        />
                    </Animatable.View>
                </View>            
            </View>
                <View style = {{margin: 20, marginVertical: 20}}>
                    <Button
                        title = "SIGN IN"
                        buttonStyle = {PARAMETERs.styleButton}
                        titleStyle = {PARAMETERs.styleButtonTitle}
                        onPress = {props.handleSubmit}
                    />
                </View>
            </View>
            }
            </Formik>
            
            <View style = {{alignItems: "center"}}>
                <Text style = {{...styles.text1, textDecorationLine: "underline"}}>Forgot Password?</Text>
            </View>
            <View style = {{alignItems: "center", marginTop: 15}}>
                <Text style = {{fontWeight: "bold",fontSize: 20}}>OR</Text>
            </View>
            <View> 
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    onPress = {() => {}}
                />
                <SocialIcon 
                    type = 'google' 
                    button
                    title = 'Sign In With Google'
                    onPress = {() => {}}
                />
            </View>
            <View style = {{marginTop: 10, marginLeft: 20}}>
                <Text style = {{...styles.text1}}>Not a User?</Text>
            </View>
            <View style = {{marginTop: 10, alignItems: "flex-end"}}>
                <Button 
                    title= "Create new account"
                    buttonStyle = {styles.createButton}
                    titleStyle = {styles.createButtonTitle}
                    onPress = {() => navigation.navigate('SignUpScreen')}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: COLORs.grey3,
        fontSize: 16
    }, 
    textInput1:{
        borderWidth:1,
        borderColor: COLORs.grey3,
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        height: 40,
        paddingLeft: 15,     
        flexDirection: "row",
        alignItems:"center",
    },
    textInput2: {
        borderWidth:1,
        borderRadius: 12,
        marginHorizontal:20,
        borderColor: COLORs.grey3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems:"center",
        height: 40,
        paddingLeft:15,
    },

    createButton:{
        backgroundColor: "white",
        alignContent: "center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height: 40,
        paddingHorizontal: 20,
        marginRight: 10
    },
    createButtonTitle:{
        color: "#ff8c52",
        fontSize:16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    },
  
})