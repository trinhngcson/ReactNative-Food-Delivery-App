import React,{useEffect,useContext} from "react";

import {View, Text, StyleSheet, Image, ScrollView} from "react-native";

import { COLORs, PARAMETERs, title } from "../../global/styles";

import { Button } from "react-native-elements";

import Swiper from "react-native-swiper";

import { SignInContext } from "../../contexts/authContext";

import auth from "@react-native-firebase/auth";

export default function WelcomeScreen({navigation}) {
  const {dispatchSignedIn} = useContext(SignInContext)
    useEffect(() =>{
      auth().onAuthStateChanged((user) =>{
        if(user){
          dispatchSignedIn({type: "UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
        }else{
          dispatchSignedIn({type: "UPDATE_SIGN_IN",payload:{userToken:null}})
        }
      })
    },[])
    return(
        <ScrollView contentContainerStyle = {{flexGrow: 1,justifyContent: 'space-between'}} >
    

        <View style ={{justifyContent:'flex-start',alignItems:'center',paddingTop:20}}>    
            <Text style={{...title, fontSize:26}}>DISCOVER RESTAURANTS</Text>
            <Text style={{...title, fontSize:26}}>IN YOUR AREA</Text>     
         </View> 


        <View>
            <Swiper autoplay ={true} style ={{height:250}}>
              <View style ={styles.slide1}>
                <Image 
                    source ={{uri:"https://firebasestorage.googleapis.com/v0/b/todo-app-d03db.appspot.com/o/plate4.png?alt=media&token=78e39923-b9b0-441c-96bd-101c068a9cdb"}}
                    style ={{height:"100%", width:"100%"}}
                />
              </View>
              <View style ={styles.slide2}>
                <Image 
                    source ={{uri:"https://firebasestorage.googleapis.com/v0/b/todo-app-d03db.appspot.com/o/plate1.png?alt=media&token=9e344879-3cb1-47cc-932d-fdc4d6978631"}}
                    style ={{height:"100%", width:"100%"}}
                />
              </View>    


              <View style ={styles.slide3}>
                <Image 
                    source ={{uri:"https://firebasestorage.googleapis.com/v0/b/todo-app-d03db.appspot.com/o/plate5.png?alt=media&token=c99cce0c-ac43-4eda-99df-a34aff73e5a6"}}
                    style ={{height:"100%", width:"100%"}}
                />
              </View>

              <View style ={styles.slide3}>
                <Image 
                    source ={{uri:"https://firebasestorage.googleapis.com/v0/b/todo-app-d03db.appspot.com/o/plate3.png?alt=media&token=f489c588-f0bd-4715-8485-5002a77b51d4"}}
                    style ={{height:"100%", width:"100%"}}
                />
              </View>
            </Swiper>
        </View>
        <View style ={{marginBottom:20}}>
            <View style ={{marginHorizontal:20, marginTop:30}}>
                    <Button 
                        title ="SIGN IN"
                        buttonStyle = {PARAMETERs.styleButton}
                        titleStyle = {PARAMETERs.styleButtonTitle}
                        onPress = {()=>{
                          navigation.navigate("SignInScreen")
                        }}
                    />
            </View>
            <View style ={{marginHorizontal:20, marginTop:30}}>
                    <Button 
                        title ="Create an account"
                        buttonStyle ={styles.createButton}
                        titleStyle ={styles.createButtonTitle}
                        onPress = {()=>{navigation.navigate('SignUpScreen')}}
                    />
            </View>
        </View>
    </ScrollView>   
    );
}

const styles = StyleSheet.create({
    slide1: {
        height:250,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9DD6EB'
        },
        slide2: {
          height:250,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#97CAE5'
        },
        slide3: {
          height:250,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#92BBD9'
        },
  
        createButton:{
          backgroundColor:"white",
          alignContent:"center",
          justifyContent:"center",
          borderRadius:12,
          borderWidth:1, 
          borderColor:"#ff8c52",
          height:50,
          paddingHorizontal:20,
          borderColor:COLORs.buttons,
        },
  
        createButtonTitle:{
          color:COLORs.grey1,
          fontSize:20,  
          fontWeight:"bold" ,
          alignItems:"center",
          justifyContent:"center"  ,
          marginTop:-3
        }
})