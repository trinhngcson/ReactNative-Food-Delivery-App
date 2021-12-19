import React,{cloneElement, useContext, useState} from 'react';

import { TouchableOpacity } from 'react-native';

import auth from "@react-native-firebase/auth";

import { 
    Text,
    View, 
    Pressable,
    Linking,
    Alert,
    Switch,
    StyleSheet
}
from 'react-native';

import { 
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} 
from '@react-navigation/drawer';

import { Avatar, Button, Icon } from 'react-native-elements'; 

import { COLORs } from '../global/styles';

import { SignInContext } from '../contexts/authContext';

export default function DrawerContent(props) {

    const{dispatchSignedIn}  = useContext(SignInContext)

    async function signOut() {
        try{
            auth()
            .signOut()
            .then(
                () => {
                    console.log("SIGNED OUT")
                    dispatchSignedIn({type: "UPDATE_SIGN_IN",payload:{userToken: null}})
            })
        }catch(error){
            Alert.alert(error.code)
        }
    }
    return(
        <View style = {styles.container}>
            <DrawerContentScrollView {...props}>
            <View style = {{flexDirection: 'column', backgroundColor: COLORs.buttons}}>
                <View style = {styles.headerUser}>
                    <Avatar
                        rounded
                        avatarStyle = {styles.avatar}
                        size = {75}
                        source={{
                            uri:'https://firebasestorage.googleapis.com/v0/b/todo-app-d03db.appspot.com/o/plate4.png?alt=media&token=78e39923-b9b0-441c-96bd-101c068a9cdb',
                        }}
                    />
                    <View style = {styles.infoUser}>
                        <Text style = {styles.UserName}>AAAAA</Text>
                        <Text style = {styles.UserMail}>trinhngcson@gmail.com</Text>
                    </View>               
                </View>
                <View style = {{flexDirection: 'row',justifyContent: 'space-evenly', paddingBottom: 10}}>
                    <View style = {styles.headerOrder}>
                        <View style = {styles.infoOrder}>
                            <Text style = {styles.num}>1</Text>
                            <Text style = {{color: COLORs.cardbackground,fontSize:14}}>My favorite</Text>
                        </View>                
                    </View>
                    <View style = {styles.headerOrder}>
                        <View style = {styles.infoOrder}>
                            <Text style = {styles.num}>0</Text>
                            <Text style = {{color: COLORs.cardbackground,fontSize:14}}>My Order</Text>
                        </View>                
                    </View>              
                </View>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label = "Payment"
                icon = {({color,size}) => (
                    <Icon 
                        type = "material-community"
                        name = "credit-card-outline"
                        color = {color}
                        size = {size}
                    />
                )}
            />
            <DrawerItem
                label = "Promotions"
                icon = {({color,size}) => (
                    <Icon 
                        type = "material-community"
                        name = "tag-heart"
                        color = {color}
                        size = {size}
                    />
                )}
            />
            <DrawerItem
                label = "Setting"
                icon = {({color,size}) => (
                    <Icon 
                        type = "material-community"
                        name = "cog-outline"
                        color = {color}
                        size = {size}
                    />
                )}
            />
             <DrawerItem
                label = "Help"
                icon = {({color,size}) => (
                    <Icon 
                        type = "material-community"
                        name = "lifebuoy"
                        color = {color}
                        size = {size}
                    />
                )}
            />
            <View style = {{borderTopWidth:1, borderTopColor: COLORs.grey5}}>
                <Text style = {styles.ref}>Preferences</Text>
                <View style = {styles.themeSetting}>
                    <Text style = {styles.themeText}>Dark Theme</Text>
                    <Switch
                        trackColor = {{false: "#767577", true : "#81b0ff"}} 
                        thumbColor = "#f4f3f4"
                    />
                </View>
            </View>
            </DrawerContentScrollView>
            <DrawerItem onPress = {() => {signOut()}}
                label = "Sign Out"
                icon = {({color,size}) => (
                    <Icon 
                        type = "material-community"
                        name = "logout-variant"
                        color = {color}
                        size = {size}               
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    headerUser:{
        flexDirection: 'row',
        alignItems:'center',
        paddingLeft: 15,
        paddingTop: 10,
    },
    avatar: {
        borderWidth: 4,
        borderColor: COLORs.cardbackground,       
    },
    UserName:{
        fontWeight: 'bold',
        color: COLORs.cardbackground,
        fontSize: 18
    },
    UserMail:{
        color: COLORs.grey2,
        fontSize: 14
    },
    infoUser :{
        marginLeft: 10
    },
    headerOrder: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-evenly',
        backgroundColor: COLORs.buttons,
       
    },
    infoOrder: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    num: {
        fontWeight: 'bold',
        color : COLORs.cardbackground,
        fontSize: 18,
    },
    ref: {
        color: COLORs.grey2,
        fontSize: 16,
        paddingTop: 10,
        paddingLeft: 20,
    },
    themeSetting: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingVertical: 5,
        paddingRight: 10
    },
    themeText: {
        fontWeight: 'bold', 
        fontSize: 16, color: 
        COLORs.grey2,
        paddingTop: 10
    }
})