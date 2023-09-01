import React from "react"
import { View, Text, Image } from "react-native"
import LinearGradient from "react-native-linear-gradient";

export const HeaderBackground = (selectedCategory)=>{
    console.log(selectedCategory.selectedCategory);
    
    return(
        <View style={{
            position: 'absolute', 
            height: 350,
            width: '100%',
            backgroundColor: '#11111111'
        }}>

            {selectedCategory.selectedCategory===undefined ? (
                <Image 
                source={require('../assets/bg1.png')}
                style={{width:'100%', height: 350, opacity:0.3}}
                />
            ):(
                <Image 
                source={{uri: `https://picsum.photos/30${selectedCategory.selectedCategory}`}}
                style={{width:'100%', height: 350, opacity: 0.1 }}
                />
            )}
           
        </View>
    )
}