import React from "react";

import {View, Text, StyleSheet, Dimensions} from "react-native";

import { COLORs, PARAMETERs } from "../global/styles";

import { Icon } from "react-native-elements/dist/icons/Icon";

export default function Header({title,type,navigation}){
    return (
        <View style = {styles.header}>
            <View style = {{marginTop: 5, marginLeft: 20}}>
                <Icon
                    type = "material-community"
                    name = {type}
                    color = {COLORs.headerText}
                    size = {28}
                    onPress = {() => {navigation.goBack()}}
                />     
            </View>
            <View>
                <Text style = {styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header :{
        backgroundColor: COLORs.buttons,
        flexDirection: "row",
        height: PARAMETERs.headerHeight,
    },
    headerText :{
        marginTop: 5,
        color: COLORs.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30,
    }
})