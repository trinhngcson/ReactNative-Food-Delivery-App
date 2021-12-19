import React from "react";

import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
    
import RestaurantMapScreen from "../screens/RestaurantsMapScreen";

import DrawerNavigator from "./DrawerNavigator"; 

const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = "DrawerNavigator" 
                component = {DrawerNavigator} 
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Stack.Screen 
                name = "RestaurantMapScreen" 
                component = {RestaurantMapScreen} 
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Stack.Navigator>
    )
}