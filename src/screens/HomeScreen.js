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
    StatusBar
} 
from 'react-native';

import {Icon} from 'react-native-elements';

import HomeHeader from "../components/HomeHeader";

import {COLORs,PARAMETERs} from "../global/styles";

import {filterData,restaurantsData} from "../global/Data";

import FoodCard from '../components/FoodCard';

import CountDown from 'react-native-countdown-component';


const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen({navigation}){
    const[delivery,setDelivery] = useState(true);
    const[indexCheck,setIndexCheck] = useState("0");
    return (
        <View style = {styles.container}>
            <StatusBar 
                translucent
                barStyle = "light-content"
                backgroundColor = "rgba(255,140,82,1)"
            />
            <HomeHeader navigation = {navigation}/>
            <ScrollView 
                stickyHeaderIndices = {[0]}
                showsVerticalScrollIndicator = {true}
            >
                <View style = {{backgroundColor: COLORs.cardbackground,paddingBottom: 10}}>
                    <View style = {{marginTop: 10, flexDirection: 'row', justifyContent:"space-evenly"}}>
                        <TouchableOpacity 
                            onPress = {() => setDelivery(true)}
                        >
                            <Text>
                                <View style = {{...styles.deliveryButton, backgroundColor: delivery ? COLORs.buttons: COLORs.cardbackground}}>
                                    <Text style = {{...styles.deliveryText,color: delivery ? COLORs.cardbackground : COLORs.buttons}}>Delivery</Text>
                                </View>
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress = {() => {
                                setDelivery(false)
                                navigation.navigate('RestaurantMapScreen')
                            }}
                        >
                            <Text>
                                <View style = {{...styles.deliveryButton, backgroundColor: delivery ? COLORs.cardbackground: COLORs.buttons}}>
                                    <Text style = {{...styles.deliveryText,color: delivery ? COLORs.buttons: COLORs.cardbackground}}>Pick Up</Text>
                                </View>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.filterView}>
                    <View style = {styles.addressView}>
                        <View style = {{flexDirection:'row', alignItems: 'center', paddingLeft: 10}}>
                            <Icon
                                type = "material-community"
                                name = "map-marker"
                                color = {COLORs.grey1}
                                size = {26}
                            />
                            <Text style = {{marginLeft: 5}}>22 Beessie Street</Text>
                        </View>

                        <View style = {styles.clockView}>
                            <Icon
                                type = "material-community"
                                name = "clock-time-four"
                                color = {COLORs.grey1}
                                size = {26}
                            />
                            <Text style = {{marginLeft: 5}}>Now</Text>
                        </View>               
                    </View>
                    <View>
                        <Icon
                            type = "material-community"
                            name = "tune"
                            color = {COLORs.grey1}
                            size = {26}
                        />
                    </View>
                </View>

                <View style = {styles.textView}>
                    <Text style = {styles.infoText}>Categories</Text>
                </View>
            
                <View>

                    <View style = {{flexDirection: 'row',alignItems:"center",marginTop:10}}>
                        <Text style = {{marginLeft: 15,fontSize: 16, marginTop:-10,marginRight:5}}>Options changing in</Text>
                        <CountDown
                            until = {3600}
                            size = {14}
                            digitStyle = {{backgroundColor: COLORs.lightgreen}}
                            digitTxtStyle = {{color: COLORs.cardbackground}}
                            timeToShow = {['M','S']}
                            timeLabels = {{m:'Min',s:'Sec'}}
                        />
                    </View>

                    <FlatList
                        horizontal = {true}
                        showsHorizontalScrollIndicator ={false}
                        data = {filterData}
                        keyExtractor = {(item) => item.id}
                        extraData = {indexCheck}
                        renderItem = {({item,index}) => (
                            <Pressable 
                                onPress ={() => {setIndexCheck(item.id)}}
                            >
                                <View style = {indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                                    <Image
                                        style = {{
                                            height: 60,
                                            width: 60,
                                            borderRadius: 30,
                                        }}
                                        source = {item.image}
                                    />
                                    <View>
                                        <Text style = {indexCheck === item.id ? {...styles.smallCardTextSelected}: {...styles.smallCardText}}>{item.name}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>

                <View style = {styles.textView}>
                    <Text style = {styles.infoText}>Free delivery now</Text>
                </View>

                <View>
                    <FlatList 
                        style = {{marginTop:10,marginBottom:10}}
                        horizontal = {true}
                        data = {restaurantsData}
                        keyExtractor = {(item,index) => index.toString()}
                        showsHorizontalScrollIndicator = {false}
                        renderItem = {({item}) => (
                            <View>
                                <FoodCard 
                                    screenWidth = {SCREEN_WIDTH*0.8}
                                    images = {item.images}
                                    restaurantName = {item.restaurantName}
                                    farAway  = {item.farAway}
                                    businessAddress = {item.businessAddress}
                                    averageReview = {item.averageReview}
                                    numberOfReview = {item.numberOfReview}
                                />
                            </View>
                        )}
                    />
                </View>
                <View style = {styles.textView}>
                    <Text style = {styles.infoText}>Promotions available</Text>
                </View>

                <View>
                    <FlatList 
                        style = {{marginTop:10,marginBottom:10}}
                        horizontal = {true}
                        data = {restaurantsData}
                        keyExtractor = {(item,index) => index.toString()}
                        showsHorizontalScrollIndicator = {false}
                        renderItem = {({item}) => (
                            <View>
                                <FoodCard 
                                    screenWidth = {SCREEN_WIDTH*0.8}
                                    images = {item.images}
                                    restaurantName = {item.restaurantName}
                                    farAway  = {item.farAway}
                                    businessAddress = {item.businessAddress}
                                    averageReview = {item.averageReview}
                                    numberOfReview = {item.numberOfReview}
                                />
                            </View>
                        )}
                    />
                </View>

                <View style = {styles.textView}>
                    <Text style = {styles.infoText}>Restaurant in your Area</Text>
                </View>
                
                <View style = {{width:SCREEN_WIDTH, paddingTop: 10}}>
                    {
                        restaurantsData.map(item =>(
                            <View key = {item.id} style = {{paddingBottom: 20}}>
                                <FoodCard 
                                    screenWidth = {SCREEN_WIDTH*0.95}
                                    images = {item.images}
                                    restaurantName = {item.restaurantName}
                                    farAway  = {item.farAway}
                                    businessAddress = {item.businessAddress}
                                    averageReview = {item.averageReview}
                                    numberOfReview = {item.numberOfReview}
                                />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            { delivery &&
            <View style = {styles.floatButton}>
                <TouchableOpacity
                    onPress = {() => {navigation.navigate('RestaurantMapScreen')}}
                >
                    <Icon 
                        name = "place"
                        type = "material"
                        size = {32}
                        color = {COLORs.buttons}
                    />
                    <Text style = {{color: COLORs.grey2}}>Map</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 23
    },
    textView :{
        backgroundColor: COLORs.grey5,
        paddingVertical: 3
    },
    infoText:{
        color: COLORs.grey2,
        fontSize:24,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    deliveryButton: {
        alignContent: "center",
        justifyContent:"center",
        borderRadius:15,
        paddingHorizontal: 20,
        paddingVertical: 3
    },
    deliveryText :{
        fontSize:16,
        fontWeight: 'bold',
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    },
    filterView :{
        flexDirection:'row', 
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 10, 
        marginVertical: 10
    },
    addressView :{
        flexDirection: 'row', 
        backgroundColor: COLORs.grey5, 
        borderRadius: 15,
        paddingVertical:5,
        justifyContent : 'space-between',
        paddingHorizontal: 20,
    },
    clockView :{
        flexDirection:'row', 
        alignItems: 'center',
        marginLeft: 20,
        backgroundColor: COLORs.cardbackground,
        borderRadius: 15,
        marginRight: 20,
        paddingHorizontal: 5,
    },
    smallCard :{
        borderRadius: 30,
        backgroundColor: COLORs.cardbackground,
        justifyContent:'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin:10,
        height: 100
    },
    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: COLORs.buttons,
        justifyContent:'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin:10,
        height: 100
    },

    smallCardTextSelected: {
        fontWeight: 'bold',
        color:COLORs.cardbackground,
    },
    smallCardText: {
        fontWeight: 'bold',
        color:COLORs.grey2,
    },

    floatButton :{
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: COLORs.cardbackground,
        elevation: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems : 'center'
    },
})