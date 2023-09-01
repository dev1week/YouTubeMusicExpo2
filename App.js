import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

import { Bottom } from './src/bottom/Bottom';
import { CategoryHeader } from './src/header/CategoryHeader';
import { HeaderBackground } from './src/header/HeaderBackground';
import { LogoHeader } from './src/header/LogoHeader';
import { useState } from 'react';

import {MusicListLarge} from './src/musiclist/MusicListLarge'
import {MusicListSmall} from './src/musiclist/MusicListSmall'
import {MusicListMedium} from './src/musiclist/MusicListMedium'


export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(); 

  return (
    <SafeAreaView style={{flex:1, paddingTop:25, backgroundColor:'#111'} }>
        <HeaderBackground selectedCategory={selectedCategory}/>
        <LogoHeader/>
        <CategoryHeader
          selectedCategory= {selectedCategory}
          setSelectedCategory={setSelectedCategory}
          />
        <ScrollView style={{borderWidth:1}}>
          <View style={{height: 1000}}>
            <MusicListSmall/> 
          </View>
        </ScrollView>
        <Bottom/>

    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
