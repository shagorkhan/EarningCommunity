import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';

const CategoryCard = ({ imageUrl, text, text2 }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <SvgUri height={'80'} width={'80'} source={imageUrl} style={styles.image} />
        <View style={{marginLeft:10}}>
            <Text style={{color:'white', fontSize:12}}>{text}</Text>
            <Text style={{color:'white', fontSize:12}}>{text2}</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={{color:'white', fontSize:13, marginRight:10}}>Play All</Text>
        <TouchableOpacity>
            <FontAwesome5 name="play" size={34} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 10,
    borderRadius:5,
    //marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#85929E',
    marginHorizontal:10,
    marginBottom:5,

  },
  image: {
    width: 35,
    height: 35,
  },
});

export default CategoryCard;
