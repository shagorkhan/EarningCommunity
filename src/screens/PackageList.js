import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function PackageList() {
    const navigation= useNavigation();
    const handlePress =(val) =>{
      navigation.navigate(val);
    };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',backgroundColor:'black',height:48,alignItems:'center',paddingHorizontal:10}}>
        <TouchableOpacity onPress={()=>handlePress('PurchaseList')}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:16,marginLeft:20}}>Package List</Text>
      </View>
      <ScrollView>
      <View style={styles.background}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:16,color:'white',}}>Play Package</Text>
          <Text style={{color:'white'}}>2000 ৳ Withdraw Limit</Text> 
        </View>
        <View style={{marginTop:5}}>
            <Text style={{fontSize:12,color:'white'}}>Unlock a world of possibilities with our affordable and flexible</Text>
            <Text style={{fontSize:12,color:'white'}}>package. For just 200 BDT, you'll gain access to our platform for </Text>
            <Text style={{fontSize:12,color:'white'}}>a full three months, giving you ample time to explore, learn, and</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>Purchase Now</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
            <Text style={{marginHorizontal:18,color:'white'}}>3 months</Text>
            <Text style={{color:'white'}}>200 ৳</Text>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:16,color:'white',}}>Play Package</Text>
          <Text style={{color:'white'}}>2000 ৳ Withdraw Limit</Text> 
        </View>
        <View style={{marginTop:5}}>
            <Text style={{fontSize:12,color:'white'}}>Unlock a world of possibilities with our affordable and flexible</Text>
            <Text style={{fontSize:12,color:'white'}}>package. For just 200 BDT, you'll gain access to our platform for </Text>
            <Text style={{fontSize:12,color:'white'}}>a full three months, giving you ample time to explore, learn, and</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>Purchase Now</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
            <Text style={{marginHorizontal:18,color:'white'}}>3 months</Text>
            <Text style={{color:'white'}}>200 ৳</Text>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:16,color:'white',}}>Play Package</Text>
          <Text style={{color:'white'}}>2000 ৳ Withdraw Limit</Text> 
        </View>
        <View style={{marginTop:5}}>
            <Text style={{fontSize:12,color:'white'}}>Unlock a world of possibilities with our affordable and flexible</Text>
            <Text style={{fontSize:12,color:'white'}}>package. For just 200 BDT, you'll gain access to our platform for </Text>
            <Text style={{fontSize:12,color:'white'}}>a full three months, giving you ample time to explore, learn, and</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>Purchase Now</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
            <Text style={{marginHorizontal:18,color:'white'}}>3 months</Text>
            <Text style={{color:'white'}}>200 ৳</Text>
        </View>
      </View>
      <View style={styles.background2}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:16,color:'white',}}>Play Package</Text>
          <Text style={{color:'white'}}>2000 ৳ Withdraw Limit</Text> 
        </View>
        <View style={{marginTop:5}}>
            <Text style={{fontSize:12,color:'white'}}>Unlock a world of possibilities with our affordable and flexible</Text>
            <Text style={{fontSize:12,color:'white'}}>package. For just 200 BDT, you'll gain access to our platform for </Text>
            <Text style={{fontSize:12,color:'white'}}>a full three months, giving you ample time to explore, learn, and</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>Purchase Now</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
            <Text style={{marginHorizontal:18,color:'white'}}>3 months</Text>
            <Text style={{color:'white'}}>200 ৳</Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#4D4D4D',
    },
    background:{
        backgroundColor:'#2E4053',
        height:172,
        marginHorizontal:10,
        marginTop:20,
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5,
      },
      background2:{
        backgroundColor:'#2E4053',
        height:172,
        marginHorizontal:10,
        marginTop:10,
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5,
      },
      button: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical:10
      },
      text: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})