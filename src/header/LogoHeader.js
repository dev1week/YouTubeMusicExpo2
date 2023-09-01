import React from "react";

import { Text, View, Image, SafeAreaView, Touchable, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
export const LogoHeader =()=>{
    console.log("헤더");
    return(
        <SafeAreaView>
            <View style={{
                marginLeft:14,
                marginRight:10, 
                flexDirection: 'row', 
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Image 
                    source={require('../../assets/logo.png')}
                    style={{width:90, height:30}}
                />
                <View style={{flexDirection: 'row'}}> 
                   <IconItem name="cast" isRed={false}/>
                   <IconItem name="search" isRed={false}/>
                   <IconItem name="perm-identity" isRed={true}/>
                </View>
                
            </View>
        </SafeAreaView>
    )
}


const IconItem = (props)=>{
    return (
        <TouchableOpacity >
            {props.isRed?
            <View style={{
                height:45, 
                width:45, 
                justifyContent: 'center', 
                alignItems: 'center',
            }}> 
                <View style={{
                    height:30, 
                    width:30, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    backgroundColor: '#555',
                    borderRadius: 100, 
                   
                }}>
                    <MaterialIcons name={props.name} color ='white' size={24}/>
                </View>
                </View> 
                :
                <View style={{
                    height:45, 
                    width:45, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    paddingHorizontal:10, 
                }}>
                    <MaterialIcons name={props.name} color ='white' size={24}/>
                </View>
            }
            
        </TouchableOpacity>

    )
}

