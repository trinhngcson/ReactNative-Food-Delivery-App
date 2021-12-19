import React from "react";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {Icon} from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';

import SearchScreen  from '../screens/SearchScreen';

import MyOrderScreen  from '../screens/MyOrdersScreen';

import MyAccountScreen  from '../screens/MyAccountScreen';

import { COLORs } from "../global/styles";

import { clientStack } from "./clientStack";


const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){

    return(
        <ClientTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor : COLORs.buttons
            }}
        >
            <ClientTabs.Screen 
                name = "HomeScreen"
                component = {HomeScreen}
                options = {
                    {
                        tabBarLabel : "Home",
                        tabBarIcon : ({color,size}) => (
                            <Icon 
                                name = 'home'
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen 
                name = "SearchScreen"
                component = {clientStack}
                options = {
                    {
                        tabBarLabel : "Search",
                        tabBarIcon : ({color,size}) => (
                            <Icon 
                                name = 'search'
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen 
                name = "MyOrdersScreen"
                component = {MyOrderScreen}
                options = {
                    {
                        tabBarLabel : "My Order",
                        tabBarIcon : ({color,size}) => (
                            <Icon 
                                name = 'view-list'
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen 
                name = "MyAccountScreen"
                component = {MyAccountScreen}
                options = {
                    {
                        tabBarLabel : "Me",
                        tabBarIcon : ({color,size}) => (
                            <Icon 
                                name = 'person'
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />       
        </ClientTabs.Navigator>
    )
}