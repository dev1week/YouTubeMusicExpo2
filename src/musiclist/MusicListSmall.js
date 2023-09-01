import React from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const {width, height} = Dimensions.get("window")
export const MusicListSmall =()=>{

  return (
    
        <View>
            <Title/>

            <ScrollView 
                horizontal={true}
                contentContainerStyle={{paddingHorizontal:20}}>
                {[...Array(3)].map((val, idx)=>{
                    return(
                    <View key={idx} style={{width: width*0.95}}>
                        {[...Array(4)].map((value, index) => {
                        return( <MusicListSmallItem key={index} />);
                    })}
                    </View>
                    )
                })}
                
            </ScrollView>
        </View>
    )
}

export const MusicListSmallItem=(props)=>{
    
    return(
        <View style={{
            flexDirection:"row",
            width:'100%',
            justifyContent:'space-between', 
            alignItems:'center',
            marginBottom:10 
            }}
            >
            <View style={{flexDirection:"row"}}>
                <Image 
                    source={{uri:'https://picsum.photos/40'}}
                    style={{width:40, height:40, borderRadius:2}}
                />
                <View 
                    style={{marginLeft:14, justifyContent:'center'}}> 
                    <Text style={{color:'white', fontSize:12, marginBottom:6}}> 음악 장르 </Text>
                    <Text style={{color:'white'}}> 음악 이름 </Text>
                </View>
            </View> 
            <View style={{padding:10}}> 
                <MaterialCommunityIcons name="dots-vertical" size={12} color="white"/>
            </View>
        </View>
    )
}

const Title=()=>{


    return( 
        <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
            <Text style={{fontSize: 13, color:'white', fontWeight:'200'}}>이 노래로 뮤직스테이션 시작하기</Text>
            <Text style={{fontWeight: 'bold', fontSize:28, color:'white'}}>빠른 선곡</Text>
        </View>

    )
}