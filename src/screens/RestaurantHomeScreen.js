import React,{useState} from "react";

import { StyleSheet, Text, View, Dimensions, ScrollView,TouchableOpacity,Modal } from "react-native";

import RestaurantHeader from "../components/RestaurantHeader";

import { Icon } from "react-native-elements";

import { COLORs,fonts } from "../global/styles";

import { restaurantsData } from "../global/Data";

import { TabView, TabBar } from "react-native-tab-view";

import MenuScreen from "./RestaurantTabs/MenuScreen";

SCREEN_WIDTH = Dimensions.get('window').width
initialLayout = SCREEN_WIDTH

export default function RestaurantHomeScreen({navigation, route}) {

    const {id,restaurant} = route.params
    const[routes] = useState([
        {key:'first',title:"MENU"},
        {key:'second',title:"INFO"},
        {key:'third',title:"REVIEWS"},
        {key:'fourth',title:"GALLERY"},
    ])
    const [index,setIndex] = useState(0)

    const UpdateRoute1 =()=>{
        return(
            <View>

            </View>
        )
    }
    const renderTabBar = props =>(
        <TabBar 
            {...props}
            indicatorStyle = {{backgroundColor:COLORs.cardbackground}}
            tabStyle = {styles.tabStyle}
            scrollEnabled = {true}
            style ={styles.tab}
            labelStyle = {styles.tabLabel}
            contentContainerStyle = {styles.tabContainer}
        />
    )

    const menuPressed = () => {
        navigation.navigate("MenuProductScreen")
    }
    return(
        <View style = {styles.container}>
            <ScrollView>
            <View>
                <RestaurantHeader id ={id} navigation ={navigation} />
                    {restaurantsData[id].discount &&
                        <View style ={styles.view1}>
                            <Text style ={styles.text1}>GET {restaurantsData[id].discount}% OFF ON FOOD TOTAL</Text>
                        </View>
                    }
                    <View style ={styles.view2}>
                        <View style ={styles.view3}>
                            <Text style ={styles.text2}>{restaurantsData[id].restaurantName}</Text>
                            <Text style ={styles.text3}>{restaurantsData[id].foodType}</Text>
                            <View style ={styles.view4}>
                                <Icon 
                                    name ="star" 
                                    type ="material-community" 
                                    color = {COLORs.grey3} 
                                    size = {15} 
                                />
                                <Text style ={styles.text4}>{restaurantsData[id].averageReview}</Text>
                                <Text style ={styles.text5}>{restaurantsData[id].numberOfReview}</Text>
                                <Icon 
                                    name ="map-marker" 
                                    type ="material-community" 
                                    color = {COLORs.grey3} 
                                    size = {15} 
                                />
                                <Text style ={styles.text6}>{restaurantsData[id].farAway} mi away</Text> 
                            </View>
                        </View>
                        <View style ={styles.view5}>
                            <Text style = {styles.text6}>Collect</Text>
                            <View style ={styles.view7}>
                                    <Text style ={styles.text7}>{restaurantsData[id].collectTime}</Text>
                                    <Text style ={styles.text8}>min</Text>
                            </View>
                        </View>
                        <View style ={styles.view8}>
                            <Text style ={styles.text6}>Delivery</Text>
                            <View style ={styles.view9}>
                                <Text style = {styles.text9}>{restaurantsData[id].deliveryTime}</Text>
                                <Text style ={styles.text11}>min</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style ={styles.view10}>
                     <TabView 
                        navigationState ={{index,routes}}
                        renderScene = {UpdateRoute1}
                        onIndexChange = {setIndex}
                        initialLayout = {initialLayout}
                        renderTabBar = {renderTabBar}
                        tabBarPosition = 'top'
                     />
                </View>    
                {
                    index === 0 && <MenuScreen onPress = {menuPressed}/>
                }   
            </ScrollView>
            <TouchableOpacity>
                <View style = {styles.view11}>
                    <View style = {styles.view12}>
                        <Text style = {styles.text13}>View Cart</Text>
                        <View style = {styles.view13}>
                            <Text style = {styles.text13}>0</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 23
    },

    view1:{
        padding:3,
        alignItems:"center",
        justifyContent:"center"
    },

    text1:{
        color:"green",
        fontSize:14,
        fontWeight:"bold"
    },

    view2:{ 
        flexDirection:"row",
        flex:1,
        flex:1,
        marginBottom:5,
        marginHorizontal:10,
        justifyContent:"space-between",
    },

    view3:{
        flex:8,
    },

    text2:{
        fontSize:20,
        fontWeight:"bold",  
        color:COLORs.grey1
    },

    text3:{
        fontSize:15,
        color:COLORs.grey3
    },

    view4:{
        flexDirection:'row',
        alignItems:"center",
        marginTop:5
    },

    text4:{
        fontFamily :fonts.android.bold,
        fontSize:13,
        color:COLORs.grey3,
        marginLeft:2,
    },

    text5:{
        fontFamily :fonts.android.bold,
        fontSize:13,
        color:COLORs.grey3,
        marginLeft:2,
        marginRight:5
    },
    text6:{
        fontFamily :fonts.android.bold,
        fontSize:13,
        color:COLORs.grey3,
        marginLeft:0,
    },

    view5:{ 
        flex:3,
        alignItems:"center"
    },

    text6:{
        fontSize:15,
        fontWeight:"bold",
        color:COLORs.grey1
    },

    view7:{
        width:40,
        height:40,
        alignItems:"center",
        borderRadius:20,
        justifyContent:"space-around",
    },

    text7:{
        fontSize:16,
        fontWeight:"bold",
        color:COLORs.black,
        marginTop:5
    },

    text8:{
        fontSize:13,
        color:COLORs.black,
        marginBottom:5
    },

    view8:{
        flex:3,
        alignItems:"center"
    },

    text9:{
        fontSize:15,
        fontWeight:"bold",
        color:COLORs.cardbackground
    },

    view9:{
        width:40,
        height:40,
        backgroundColor:COLORs.buttons,
        alignItems:"center",
        borderRadius:20,
        justifyContent:"space-around",
    },

    text10:{
        fontSize:16,
        fontWeight:"bold",
        color:COLORs.cardbackground,
        marginTop:5
    },

    text11:{
        fontSize:13,
        color:COLORs.cardbackground,
        marginBottom:5
    },

    view10:{
        elevation:10,
        backgroundColor:COLORs.pagebackground
    },

    view11:{
        backgroundColor:COLORs.buttons,
        height:50,
        alignContent:"center",
        marginBottom:0,
        justifyContent:"center"
    },

    view12:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },

    text12:{
        padding:10,
        fontWeight:"bold",
        fontSize:18,
        color:COLORs.cardbackground
    },

    view13:{ 
        borderWidth:1,
        marginRight:10,
        borderColor:COLORs.cardbackground,
        borderRadius:6,
        paddingBottom:2
    },

    text13:{
        paddingHorizontal:3,
        fontWeight:"bold",
        fontSize:18,
        color:COLORs.cardbackground,
    },

    tab:{ 
        paddingTop :0,
        backgroundColor:COLORs.buttons,
        justifyContent:"space-between",
        alignItems:"center"
    },

    tabContainer:{ 
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
    },

    tabLabel:{
        fontWeight:'bold',
        color: COLORs.cardbackground
    },
  
    tabStyle:{
        width:SCREEN_WIDTH/4,
        maxHeight:45,
    },

    view14:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:COLORs.buttons,
        top:0,
        left:0,
        right:0,
        paddingTop:25
    },

    text14:{
        fontWeight:"bold",
        marginLeft:40,
        color:COLORs.black,
        fontSize:18
    },

    view15:{
        marginTop:5,
        paddingBottom:20
    },          

})