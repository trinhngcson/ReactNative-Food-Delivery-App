import React from "react";

import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,FlatList } from "react-native";

import { Icon } from "react-native-elements";

import { COLORs } from "../global/styles";

import ProductCard from "./ProductCard";

import { restaurantsData } from "../global/Data";


export default function SearchResultCard({
    OnPressRestaurantCard,
    restaurantName,
    deliveryAvailable,
    discountPercent,
    discountAvailable,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    productData
}){
    return(
        <View style = {styles.container}>
            <TouchableOpacity
                onPress ={OnPressRestaurantCard}
            >
                <View style = {styles.view1}>
                    <View style = {{height: 150}}>
                        <ImageBackground
                            style = {{height: "100%",width: "100%"}}
                            source = {{uri:images}}
                            imageStyle = {styles.imageStyle}
                            resizeMode = "stretch"
                        />
                        <View style = {styles.image}>
                            <View style = {{flexDirection: "row"}}>
                                <Text style = {styles.text1}>{averageReview}</Text>
                                <Icon 
                                    type = "material"
                                    name = "grade"
                                    style = {{marginLeft: 1}}
                                    size  = {19}
                                    color = "#e6f132"
                                />
                            </View>      
                            <Text style = {styles.text2}>{numberOfReview} reviews</Text>
                        </View>
                    </View>

                    <View style = {styles.view3}>
                        <View style = {{paddingTop:5}}>
                            <Text style = {styles.text5}>{restaurantName}</Text>
                        </View>
                        <View style = {{flexDirection: "row"}}>
                            <View style = {styles.view4}>
                                <Icon 
                                    type = "material"
                                    name = "place"
                                    color = {COLORs.grey2}
                                    size = {18}
                                    iconStyle = {{
                                        marginTop: 3,
                                    }}
                                />
                                <Text style = {styles.view5}> {farAway} Min</Text>
                            </View>
                            <View style = {{flex :9}}>
                                    <Text style = {styles.text6}>{businessAddress}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style = {{marginTop:5,paddingBottom: 20}}>
                <FlatList 
                    style = {{backgroundColor: COLORs.cardbackground}}
                    data = {productData}
                    keyExtractor = {(item,index)=>index.toString()}
                    renderItem = {({item,index}) => (
                        <ProductCard
                            image = {item.image}
                            productName = {item.name}
                            price = {item.price}
                        />
                    )}
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                />
                              
               
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex :1,
    },

    view1: {
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
    },
        
    image: {
        position:"absolute",
        top:0,
        right:0,
        backgroundColor:'rgba(52, 52, 52,0.4)',
        padding:2,
        alignItems:"center",
        justifyContent:"center", 
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
      
    imageStyle: {
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
        
    text1: {
        color:"white",
        fontSize:20,
        fontWeight:'bold',
        marginTop:-3
    },
      
    text2 : {
        fontWeight: "bold",
        color:"white",
        fontSize:13,
        marginRight:0,
        marginLeft:0
    },
      
    view2 : { 
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:-5
    },
    text3: {
        fontSize:10,
        fontWeight:'bold',
        color:COLORs.grey2,
    },
      
    text4: {
        fontSize:10,
        fontWeight:'bold',
        color:COLORs.grey2,
    },
    view3: { 
        flexDirection:"column",
        marginHorizontal:5,
        marginBottom:10,
        marginLeft:0,
        marginTop:5
    },
      
    text5: {
        fontSize:17,
        fontWeight:'bold',
        color:COLORs.grey1,
    },
      
    view4 : {
        flex:4,
        flexDirection:"row",
        borderRightWidth:1,
        borderRightColor:COLORs.grey4,
        paddingHorizontal:5,
    },
      
    view5:  {
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:COLORs.grey3
    },
          
    text6: {
        fontSize:12,
        paddingTop:5,
        color:COLORs.grey2,
        paddingHorizontal:10,
    }   
})