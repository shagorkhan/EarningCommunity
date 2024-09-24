import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function WithdrawNow() {
    const navigation= useNavigation();
    const handlePress =(val) =>{
    navigation.navigate(val);
    };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',backgroundColor:'black',height:48,alignItems:'center',paddingHorizontal:10}}>
        <TouchableOpacity onPress={()=> handlePress('AccountScreen')}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:16,marginLeft:20}}>Withdraw</Text>
      </View>
      <Text style={{fontSize:16,color:'white',marginLeft:10,marginBottom:10,marginTop:20}}>Amount</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="calculator-sharp" size={20} color="white" style={{marginRight:10}} />
        <TextInput
          style={styles.input}
          placeholder="eg.4000"
          placeholderTextColor="white"
          keyboardType="phone-pad"
          maxLength={13} // Adjust this based on your phone number format
        />
      </View>
      <Text style={{fontSize:16,marginLeft:10,marginVertical:10,color:'white'}}>Password</Text>
      <View style={styles.inputContainer}>
        <Octicons name="key" size={20} color="white" style={{marginRight:10}} />
        <TextInput
          style={styles.input}
          placeholder="Give new password"
          placeholderTextColor="white"
        />
      </View>

      <Text style={{fontSize:16,marginLeft:10,marginVertical:10,color:'white'}}>Select Wallet</Text>
      <TouchableOpacity style={styles.inputContainer2}>
        <MaterialCommunityIcons name="wallet-membership" size={20} color="white" style={{marginRight:10}} />
        <Text style={styles.input}>Not Selected</Text>
        <Icon name="angle-down" size={24} color="white" style={styles.arrowIcon} />
      </TouchableOpacity>
      <CustomButton title="Withdraw Request" onPress={handlePress} buttonColor="#2E4053" />
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#4D4D4D',
    },
    inputContainer: {
        flexDirection: 'row',
        height:42,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 5,
        paddingHorizontal: 10,
        //marginBottom: 10,
        marginHorizontal:10,
        alignItems:'center',
        marginBottom:10
      },
      inputContainer2: {
        flexDirection: 'row',
        height:42,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 5,
        paddingHorizontal: 10,
        //marginBottom: 10,
        marginHorizontal:10,
        alignItems:'center',
        marginBottom:40
      },
      input: {
        flex: 1,
        color: 'white',
        fontSize: 14,
      },
})