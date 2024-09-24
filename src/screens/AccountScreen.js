import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CategoryScreen() {
  const navigation = useNavigation();
  const handlePress = (val) => {
    navigation.navigate(val);
  };
  return (
    <View style={styles.container}>
      <Header imageUrl={require('../../assets/Hamilon.png')} text="@morgan992" text2="Play pack 201" />
      <View style={styles.takacontainer}>
        <View style={styles.taka}>
          <FontAwesome name="dollar" size={20} color="white" />
          <Text style={{marginLeft:10,color:'white'}}>607 tk</Text>
        </View>
        <TouchableOpacity onPress={()=>handlePress('WithdrawNow')} style={styles.taka}>
          <Octicons name="arrow-switch" size={24} color="#2891FF" />
          <Text style={{marginLeft:10,color:'#2891FF'}}>Withdraw Now</Text>
        </TouchableOpacity>
      </View>
      <View style={{borderBottomWidth:.6, borderBottomColor: '#FFFFFF',marginTop:15,marginHorizontal:10}}></View>
      <Text style={{color:'white',margin:10,fontSize:16}}>Account</Text>
      <TouchableOpacity onPress={()=>handlePress('PurchaseList')} style={{flexDirection:'row',marginLeft:20,marginTop:20,marginBottom:15}}>
        <Feather name="package" size={22} color="white" />
        <Text style={{fontSize:16,marginLeft:10,color:'white'}}>3 Package Purchased</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlePress('WalletList')} style={{flexDirection:'row',marginLeft:20,marginBottom:15}}>
        <AntDesign name="inbox" size={22} color="white" />
        <Text style={{fontSize:16,marginLeft:10,color:'white'}}>3 Wallets</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlePress('WithdrawHistory')} style={{flexDirection:'row',marginLeft:23,marginBottom:15}}>
        <Octicons name="arrow-switch" size={22} color="white" />
        <Text style={{fontSize:16,marginLeft:13,color:'white'}}>3 Withdraw Request</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlePress('WatchHistory')} style={{flexDirection:'row',marginLeft:20,marginBottom:15}}>
        <Feather name="mouse-pointer" size={22} color="white" />
        <Text style={{fontSize:16,marginLeft:10,color:'white'}}>3 Content Views</Text>
      </TouchableOpacity>
    </View>
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