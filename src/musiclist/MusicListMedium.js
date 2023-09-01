import React from "react";
import { View, Text } from "react-native";

export const MusicListMedium =()=>{

    return(
        <Title/>
    )
}

const Title = ()=>{



    return(
        <View style={{
            flexDirection:"row",
            justifyContnent: 'space-between',
            paddingHorizontal: 10, 
            paddingVertical: 20, 
            
        }}> 
            <Text style={{
                color:"white",
                fontSize: 28,
                fontWeight: 28
                }}>다시 듣기</Text>
            <View>
                <Text style={{color:"white"}}>더보기</Text>
            </View>
            
        </View>

    )
}