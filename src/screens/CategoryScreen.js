import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CategoryCard from '../components/CategoryCard';
import { useIsFocused } from '@react-navigation/native';
import { useUser } from '../Provider/UserContext';
import { getApi } from '../Function/Api';
import { useLoader } from '../Provider/LoaderContext';

export default function CategoryScreen({navigation}) {
  const [category,setCategory]=useState()
  const { showLoader, hideLoader } = useLoader();
  useEffect(()=>{
    showLoader()
    getApi("/category?includeVideo=sdfs").then(data=>{
      setCategory(data)
      hideLoader()
    }).catch(e=>{
      hideLoader()
      console.log(e)
    })
  },[])
  return (
    <ScrollView style={styles.container}>
      <Header imageUrl={require('../../assets/Hamilon.png')} text="@morgan992" text2="Play pack 201" />
      <View style={styles.takacontainer}>
        <View style={styles.taka}>
          <MaterialIcons name="access-time" size={24} color="white" />
          <Text style={{marginLeft:10,color:'white'}}>20m 30s</Text>
        </View>
        <View style={styles.taka}>
          <FontAwesome name="dollar" size={20} color="white" />
          <Text style={{marginLeft:10,color:'white'}}>607 tk</Text>
        </View>
      </View>
      <View style={{borderBottomWidth:.6, borderBottomColor: '#FFFFFF',marginTop:15,marginHorizontal:10}}></View>
      <Text style={{color:'white',margin:10,fontSize:16}}>Categories</Text>
      {category?.map((doc,i)=>(
        <CategoryCard key={i} imageUrl={require('../../assets/ss.svg')} text={doc.title} text2={`${doc.count} Videos`} />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: height * 0.4,
    // width: '100%',
    backgroundColor: '#4D4D4D',
  },
  takacontainer:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  taka:{
    flexDirection:'row',
  },
});