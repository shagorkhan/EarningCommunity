import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function CategoryScreen() {
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
      <Text style={{color:'white',margin:10,fontSize:16}}>Notifications</Text>

      <View style={styles.notification}>
        <Fontisto name="arrow-swap" size={24} color="#FA0E0E" />
        <View style={styles.text}>
          <Text style={{color:'white'}}>Withdraw Cancelled</Text>
          <Text style={{color:'white'}}>Your withdraw request 200 BDT has been</Text>
          <Text style={{color:'white'}}>cancelled</Text>
          <Text style={{color:'rgba(0, 0, 0, 0.75)'}}>11 JUN 2023</Text>
        </View>
      </View>
      <View style={styles.notification}>
        <Fontisto name="arrow-swap" size={24} color="#00D408" />
        <View style={styles.text}>
          <Text style={{color:'white'}}>Withdraw Confirm</Text>
          <Text style={{color:'white'}}>Your withdraw request 200 BDT has been</Text>
          <Text style={{color:'white'}}>Confirm</Text>
          <Text style={{color:'rgba(0, 0, 0, 0.75)'}}>11 JUN 2023</Text>
        </View>
      </View>
      <View style={styles.notification}>
        <MaterialCommunityIcons name="package" size={26} color="black" />
        <View style={styles.text}>
          <Text style={{color:'white'}}>Package Purchased</Text>
          <Text style={{color:'white'}}>Your withdraw request 200 BDT has been</Text>
          <Text style={{color:'white'}}>Cancelled</Text>
          <Text style={{color:'rgba(0, 0, 0, 0.75)'}}>11 JUN 2023</Text>
        </View>
      </View>
      <View style={styles.notification}>
        <Ionicons name="notifications-outline" size={26} color="#FFB61A" />
        <View style={styles.text}>
          <Text style={{color:'white'}}>Notice</Text>
          <Text style={{color:'white'}}>Your withdraw request 200 BDT has been</Text>
          <Text style={{color:'white'}}>Cancelled</Text>
          <Text style={{color:'rgba(0, 0, 0, 0.75)'}}>11 JUN 2023</Text>
        </View>
      </View>
      

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
  notification:{
    padding: 10,
    borderRadius:5,
    //marginTop:20,
    flexDirection:'row',
    //justifyContent:'space-between',
    backgroundColor:'#85929E',
    marginHorizontal:10,
    marginBottom:5,
    alignItems:'center',
  },
  text:{
    marginLeft:20,
  },
});