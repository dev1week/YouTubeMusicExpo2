import React from "react"
import { View, Text, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
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
                source={require('../../assets/bg1.png')}
                style={{width:'100%', height: 350, opacity:0.3}}
                />
            ):(
                <>
                <Image 
                source={{uri: `https://picsum.photos/30${selectedCategory.selectedCategory}`}}
                style={{width:'100%', height: 350, opacity: 0.1 }}
                />
                <LinearGradient 
                    start={{x:0.5, y:0.1}}
                    end={{x:0.5, y:0.1}}
                    locations={[0,1]}
                    colors={['#11111100', '#111111']}
                    style={{
                        position:'absolute',
                        height: 350, 
                        width: '100%', 
                    }}
                    />
                </>
            )}
           
        </View>
    )
}