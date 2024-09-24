import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PurchaseList() {
  const navigation= useNavigation();
  const handlePress =(val) =>{
    navigation.navigate(val);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',backgroundColor:'black',height:48,alignItems:'center',paddingHorizontal:10}}>
        <TouchableOpacity onPress={()=>handlePress('AccountScreen')}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:16,marginLeft:20}}>Purchase List</Text>
      </View>
      <ScrollView style={{flex:1}}>
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
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
              <Text style={{marginHorizontal:12,color:'white'}}>3 months</Text>
              <Text style={{color:'white'}}>200 ৳</Text>
            </View>
            <View>
              <Text style={{color:'#E3A832'}}>PENDING</Text>
            </View>
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
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
              <Text style={{marginHorizontal:12,color:'white'}}>3 months</Text>
              <Text style={{color:'white'}}>200 ৳</Text>
            </View>
            <View>
              <Text style={{color:'#32E364'}}>ACCEPTED</Text>
            </View>
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
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
              <Text style={{marginHorizontal:12,color:'white'}}>3 months</Text>
              <Text style={{color:'white'}}>200 ৳</Text>
            </View>
            <View>
              <Text style={{color:'#E50914'}}>REJECTED</Text>
            </View>
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
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
              <Text style={{marginHorizontal:12,color:'white'}}>3 months</Text>
              <Text style={{color:'white'}}>200 ৳</Text>
            </View>
            <View>
              <Text style={{color:'#E50914'}}>REJECTED</Text>
            </View>
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
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
              <Text style={{marginHorizontal:12,color:'white'}}>3 months</Text>
              <Text style={{color:'white'}}>200 ৳</Text>
            </View>
            <View>
              <Text style={{color:'#E50914'}}>REJECTED</Text>
            </View>
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
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
              <Text style={{marginHorizontal:12,color:'white'}}>3 months</Text>
              <Text style={{color:'white'}}>200 ৳</Text>
            </View>
            <View>
              <Text style={{color:'#E50914'}}>REJECTED</Text>
            </View>
        </View>
      </View>
      </ScrollView>
      <TouchableOpacity onPress={()=>handlePress('PackageList')} style={{position: 'absolute', bottom: 40, right: 20, zIndex: 10}}>
        <FontAwesome5 name="plus-circle" size={32} color="white" />
      </TouchableOpacity>
  
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
        //height:114,
        marginHorizontal:10,
        marginTop:20,
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5,
      },
      background2:{
        backgroundColor:'#2E4053',
        //height:114,
        marginHorizontal:10,
        marginTop:10,
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5,
      },
})