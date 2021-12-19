import React from "react";

import { StyleSheet, Text, View, Dimensions,FlatList } from "react-native";

import SearchResultCard from "../components/SearchResultCard";

import { restaurantsData } from "../global/Data";

import { COLORs } from "../global/styles";

import { productData } from "../global/Data";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function SearchResultScreen({navigation,route}){
    return(
        <View style = {styles.container}>
            <View>
                <FlatList
                    style = {{backgroundColor: COLORs.cardbackground}}
                    data = {restaurantsData}
                    keyExtractor = {(item,index)=>index.toString()}
                    renderItem = {({item,index}) => (
                        <SearchResultCard
                            screenWidth ={SCREEN_WIDTH}
                            images = {item.images}
                            averageReview = {item.averageReview}
                            numberOfReview = {item.numberOfReview}
                            restaurantName = {item.restaurantName}
                            farAway = {item.farAway}
                            businessAddress = {item.businessAddress}
                            productData = {item.productData}
                            OnPressRestaurantCard = {()=>{navigation.navigate("RestaurantHomeScreen",{id:index,restaurant:item.restaurantName})}}
                        />
                    )}
                    ListHeaderComponent = {
                        <View>
                            <Text style = {styles.listHeader}>
                                {restaurantsData.length} for {route.params.item}
                            </Text>
                        </View>
                    }
                    showsVerticalScrollIndicator = {false}
                />
            </View>       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    listHeader: {
        color :COLORs.grey1,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
    } 
})