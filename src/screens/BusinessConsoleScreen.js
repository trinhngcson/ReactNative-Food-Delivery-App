import React,{useState} from 'react';

import { 
    Text,
    View, 
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Pressable,
    Image,
    Dimensions,
} 
from 'react-native';

import {Icon} from 'react-native-elements';

export default function BusinessConsoleScreen(){
    return (
        <View style = {styles.container}>
            <Text>BusinessConsoleScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})