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
    <SafeAreaView style={{flex:1, paddingTop:25} }>
        <HeaderBackground/>
        <LogoHeader/>
        <CategoryHeader
          selectedCategory= {selectedCategory}
          setSelectedCategory={setSelectedCategory}
          />
        <ScrollView style={{borderWidth: 1}}>
          <View style={{height: 1000}}>
          <Text>list</Text>
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
