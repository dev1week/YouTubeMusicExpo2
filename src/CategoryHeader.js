import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

export const CategoryHeader =({selectedCategory,  setSelectedCategory})=>{
    const category = [
        { id: '1', name: '휴식' },
        { id: '2', name: '에너지 충전' },
        { id: '3', name: '집중' },
        { id: '4', name: '운동' },
        { id: '5', name: '출퇴근/등하교' },
    ];


    const onPressCategory =(index)=>{
        const data = selectedCategory === index? undefined:index;
        setSelectedCategory(data); 
    }


    return (
        <View>
            <ScrollView
                // 요소간 간격 상관없이 전체 컨테이너 기준 양끝 패딩 넣기 
                contentContainerStyle={{paddingHorizontal:20}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={{flexDirection: 'row', paddingVertical:20}}
                >
                {category.map((value)=>{
                    return(
                        <TouchableOpacity key={value.id} onPress={()=>onPressCategory(value.id)} >
                            <View style={{
                                padding:8, 
                                paddingHorizontal:16, 
                                borderWidth:1, 
                                backgroundColor: selectedCategory ===value.id ? '#ffffff': '#ffffff10',
                                borderColor: '#ffffff30',
                                marginHorizontal: 4, 
                                borderRadius: 8 

                                }}>
                                <Text style={{color: selectedCategory ===value.id ?'#111': 'white'}}>{value.name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            
            </ScrollView>
            
        </View>
    )
}

