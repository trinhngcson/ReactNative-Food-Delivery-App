import React from 'react';
import { Text,View,TouchableOpacity,Image, StyleSheet, Dimensions } from 'react-native';

import { Icon } from 'react-native-elements';

import { COLORs, PARAMETERs } from '../global/styles';

export default function FoodCard({
    OnPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
}){
    return (
        <TouchableOpacity>
            <View style = {{...styles.cardView, width: screenWidth}}>
                <Image 
                    style = {{...styles.image, width: screenWidth}}
                    source = {{uri:images}}
                />
                <View>
                <View>
                    <Text style = {styles.restaurantName}>{restaurantName}</Text>
                </View>
                <View style = {{flex:1,flexDirection:'row'}}>
                    <View style = {styles.distance}>
                        <Icon 
                            type = "material"
                            name = "place"
                            color = {COLORs.grey2}
                            size = {18}
                            iconStyle = {{
                                marginTop: 3,
                                marginLeft: 10
                            }}
                        />
                        <Text style = {styles.min}> {farAway} Min</Text>
                    </View>
                    <View style = {{flex: 9, flexDirection:'row'}}>
                        <Text style = {styles.address}>{businessAddress}</Text>
                    </View>
                </View>
            </View>
            </View>
            
            <View style = {styles.review}>
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {styles.average}>{averageReview}</Text>
                    <Icon 
                        type = "material"
                        name = "grade"
                        style = {{...styles.average, marginTop: 1}}
                        size  = {19}
                        color = "gold"
                    />
                </View>    
                <Text style = {styles.numReview}>{numberOfReview} reviews</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:COLORs.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    image :{
        borderTopLeftRadius:5,
        borderBottomRightRadius:5,
        height:150,
    },
    restaurantName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: COLORs.grey1,
        marginTop: 5,
        marginLeft: 10,
    },
    distance :{
        flex: 4,
        flexDirection: 'row',
        borderRightColor: COLORs.grey4,
        paddingHorizontal:5,
        borderRightWidth:1,
    },
    min :{
        fontSize: 12,
        fontWeight:'bold',
        paddingTop: 5,
        color: COLORs.grey3
    },
    address :{
        fontSize: 12,
        paddingTop: 5,
        color: COLORs.grey2,
        paddingHorizontal: 10,
    },
    review :{
        position: "absolute",
        top: 0,
        right: 10,
        backgroundColor:"rgba(52,52,52,0.3)",
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12,
    },
    average :{
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -3,
    },
    numReview: {
        color : COLORs.cardbackground,
        fontWeight: 'bold',
    },
})