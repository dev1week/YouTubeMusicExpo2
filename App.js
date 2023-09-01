import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Bottom } from './src/Bottom';
import { CategoryHeader } from './src/CategoryHeader';
import { HeaderBackground } from './src/HeaderBackground';
import { LogoHeader } from './src/LogoHeader';
import { useState } from 'react';

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
        <ScrollView>
          <View style={{height: 1000}}>
          <Text></Text>
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
