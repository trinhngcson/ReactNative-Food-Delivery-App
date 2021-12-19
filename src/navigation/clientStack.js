import { createStackNavigator } from "@react-navigation/stack";

import React, { useLayoutEffect } from "react";

import { StyleSheet,Text, View } from "react-native";
import MenuProductScreen from "../screens/MenuProductScreen";
import PreferenceScreen from "../screens/PreferenceScreen";

import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";

import SearchResultScreen from "../screens/SearchResultScreen";

import SearchScreen from "../screens/SearchScreen";

const ClientSearch = createStackNavigator()

export function clientStack({navigation, route}){
    return(
        <View style = {styles.container}>
            <ClientSearch.Navigator>
                <ClientSearch.Screen
                    name = "SearchScreen"
                    component = {SearchScreen}
                    options ={ () => ({
                        headerShown: false
                    })}
                />
                <ClientSearch.Screen
                    name = "SearchResultScreen"
                    component = {SearchResultScreen}
                    options ={ () => ({
                        headerShown: false
                    })}
                />
                <ClientSearch.Screen
                    name = "RestaurantHomeScreen"
                    component = {RestaurantHomeScreen}
                    options ={ () => ({
                        headerShown: false
                    })}
                />
                <ClientSearch.Screen
                    name = "MenuProductScreen"
                    component = {MenuProductScreen}
                    options ={ () => ({
                        headerShown: false
                    })}
                />
                <ClientSearch.Screen
                    name = "PreferenceScreen"
                    component = {PreferenceScreen}
                    options ={ () => ({
                        headerShown: false
                    })}
                />
            </ClientSearch.Navigator>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})