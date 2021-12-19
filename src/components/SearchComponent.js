import React,{useState,useRef} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback, 
    Modal, 
    TextInput,
    FlatList,
    TouchableOpacity,
    Keyboard
} 
from 'react-native'; 

import { Icon } from 'react-native-elements';

import {COLORs} from "../global/styles";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import { filterData } from '../global/Data';

import { filter } from 'lodash';


export default function SearchComponent(){

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFocused, setTextInputFocused] = useState(true)
    const textInput = useRef(0)
    const [data, setData] =  useState([...filterData])

   

    const contains = ({name},query) => {
        name = name.toLowerCase()
        if(name.includes(query)){
            return true
        }
        return false
    }

    const handleSearch = text => {
        const dataS = filter(filterData, sreach => {
            return contains(sreach,text)
        })
        setData([...dataS])
    }

    return (
        <View style = {{alignItems: 'center'}}>
            <TouchableWithoutFeedback
                onPress ={()=>{
                    setModalVisible(true)
                }}
            >
                <View style = {styles.SearchArea}>
                    <Icon name =  "search"   
                        style = {styles.searchIcon} 
                        type ="material"
                        iconStyle ={{marginLeft:5}}
                        size = {32}     
                    />
                    <Text style ={{fontSize:15}}>What are you looking for ?</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType = "fade"
                transparent = {false}
                visible = {modalVisible}
            >
                <View style = {styles.modal}>
                    <View style = {styles.view1}>
                        <View style = {styles.TextInput}>
                            <Animatable.View 
                                animation = {textInputFocused?"fadeInRight":"fadeInLeft"}
                                duration = {400}
                            >
                                <Icon name = {textInputFocused ? "arrow-back" : "search" }  
                                    onPress = {()=>{
                                            if(textInputFocused)
                                            setModalVisible(false)
                                            setTextInputFocused(true)
                                        }}
                                        style = {styles.icon2} 
                                        type  ="material"
                                        iconStyle ={{marginRight:5}}
                                />
                            </Animatable.View>

                            <TextInput 
                                style ={{width:"90%",height: 50}}
                                placeholder =""
                                autoFocus = {false}
                                ref = {textInput}

                                onFocus = {()=>{
                                    setTextInputFocused(true)
                                }} 

                                onBlur = {()=>{
                                    setTextInputFocused(false)
                                }}

                                onChangeText ={handleSearch}
                            />

                            <Animatable.View
                                animation = {textInputFocused?"fadeInLeft":""}
                                duration = {400}
                            >
                            <Icon 
                                name = {textInputFocused ? "cancel" : null } 
                                iconStyle ={{color:COLORs.grey3}}
                                type ="material"
                                style={{marginRight:-10}}
                                onPress ={()=>{
                                    textInput.current.clear() 
                                    // handleSearch()          
                                }}
                            />
                            </Animatable.View>
                        </View>
                    </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            onPress = {() =>{
                                Keyboard.dismiss
                                navigation.navigate("SearchResultScreen",{item:item.name})
                                setModalVisible(false)
                                setTextInputFocused(true)
                        }}>
                            <View style={styles.view2}>
                                <Text style={{color:COLORs.grey2, fontSize:15 }}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />      
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color:COLORs.grey3,
        fontSize:16
    },
    TextInput: {
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:0,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10
    },
    SearchArea: {
        marginTop :10,
        width:"95%",
        height:50,
        backgroundColor:COLORs.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:COLORs.grey4,
        flexDirection:"row",
        alignItems:"center"
    },
    searchIcon: { 
        fontSize:24,
        padding:5,
        color:COLORs.grey2,
    },
    view1: { 
        height:70,
        justifyContent:"center",
        paddingHorizontal:10,
    },
    view2: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    icon2: { 
        fontSize:24,
        padding:5,
        color:COLORs.grey2,
    },
    modal: {
        flex:1
    }
})