import React from 'react';

import { Text,View, StyleSheet } from 'react-native';

import {Icon, withBadge} from 'react-native-elements';

import {COLORs,PARAMETERs} from '../global/styles'

export default function HomeHeader({navigation}) {
    const BadgeIcon = withBadge(0)(Icon)
    return(
        <View style = {styles.header}>
            <View styles = {styles.HeaderMenu}>
                <Icon 
                    type = "material-community"
                    name = "menu"
                    color = {COLORs.cardbackground}
                    size = {34}
                    style = {{marginTop: 3, marginLeft: 5}}
                    onPress = {() => {
                        navigation.toggleDrawer()
                    }}
                />
            </View>
            <View style = {styles.center}>
                <Text style = {styles.HeaderTitle}>XpressFood</Text>
            </View>

            <View style = {{...styles.center,marginRight: 10}}>
                <BadgeIcon 
                    type = "material-community"
                    name = "cart"
                    color = {COLORs.cardbackground}
                    size = {35}
                    tyle = {{marginTop: 3}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center :{
        alignItems: 'center', 
        justifyContent:'center'
    },
    header:{
        flexDirection:"row",
        backgroundColor: COLORs.buttons,
        height: PARAMETERs.headerHeight,
        justifyContent: "space-between"
    },
    HeaderMenu:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
    },
    HeaderTitle:{
        fontSize: 26,
        color: COLORs.cardbackground,
        fontWeight: 'bold'
    },
    
})