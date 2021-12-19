import React from "react";

import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

import WelcomneScreen from "../screens/authScreens/WelcomeScreen";

import SigninScreen from "../screens/authScreens/SigninScreen";

import SignUpScreen from "../screens/authScreens/SignUpScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = "WelcomneScreen" 
                component = {WelcomneScreen} 
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Stack.Screen 
                name = "SignInScreen" 
                component = {SigninScreen} 
                options = {{
                    headerShown: false,
                    ...TransitionPresets.ScaleFromCenterAndroid
                }}
            />
            <Stack.Screen 
                name = "SignUpScreen" 
                component = {SignUpScreen} 
                options = {{
                    headerShown: false,
                    ...TransitionPresets.ScaleFromCenterAndroid
                }}
            />         
        </Stack.Navigator>
    );
}