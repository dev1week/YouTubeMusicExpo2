import React from 'react'; 
import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const BottomItem =(props)=>{
    return(
        <TouchableOpacity style={{alignItems:'center', flex:1}}>
            <View style={{marginVertical:4}}>
                <MaterialIcons name={props.name} color ='white'/>
            </View>
            <Text style={{color:'white'}}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )


}



export const Bottom = ()=>{
    return (
    <View style={{backgroundColor:'#222', paddingBottom: 24}}>
        <View style={{height: 24}}>
            <View style={{flexDirection: 'row'}}>
                <BottomItem name={"home"} title ={"홈"}/>
                <BottomItem name={"explore"} title ={"둘러보기"}/>
                <BottomItem name={"library-music"} title ={"내 음악"}/>
            </View>
        </View>
    </View>
    )
}