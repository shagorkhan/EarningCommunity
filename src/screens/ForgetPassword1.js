import { View, Text, ScrollView, StyleSheet, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ForgetPassword1() {
  const navigation= useNavigation();
  const handlePress =(val) =>{
  navigation.navigate(val);
  };
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row',backgroundColor:'black',height:48,alignItems:'center',paddingHorizontal:10}}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{color:'white',fontSize:16,marginLeft:20}}>Forget Password</Text>
        </View>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <View style={styles.content}>
            <Image source={require('../../assets/Hamilon.png')} style={styles.image} />
            
        </View>
        <Text style={{fontSize:16,color:'white',marginLeft:10,marginBottom:10,marginTop:20}}>Phone Number</Text>
        <View style={styles.inputContainer}>
            <Feather name="phone-incoming" size={20} color="white" style={{marginRight:10}} />
            <TextInput
            style={styles.input}
            placeholder="+8801761232343"
            placeholderTextColor="white"
            keyboardType="phone-pad"
            maxLength={13} // Adjust this based on your phone number format
            />
        </View>

        <View style={{flexDirection:'row',marginHorizontal:10,justifyContent:'space-between',marginTop:5}}>
            <View style={{flexDirection:'row',}}>
                <Feather name="alert-triangle" size={20} color="red" />
                <Text style={{color:'white',marginLeft:8,fontSize:13}}>Not Verified</Text>
            </View>
            <View style={{flexDirection:'row',}}>
                <Octicons name="verified" size={20} color="green" />
                <Text style={{color:'white',marginLeft:8,fontSize:13}}>Verify Now</Text>
            </View>
        </View>

        <Text style={{fontSize:16,marginLeft:10,marginVertical:10,color:'white',marginTop:15}}>OTP</Text>
        <View style={styles.inputContainer2}>
            <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            />
        </View>

        <TouchableOpacity>
            <CustomButton  title="Next" onPress={()=> handlePress('ForgetNext')} buttonColor="#2E4053" />
        </TouchableOpacity>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4D4D4D',
    },
    content: {
        //flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 100, // Adjust the margin top as needed
      },
      image: {
        width: 90, // Adjust width and height according to your image size
        height: 90,
        resizeMode: 'contain', // Adjust resizeMode as needed
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
        marginBottom:50
      },
      input: {
        flex: 1,
        color: 'white',
        fontSize: 14,
      },
})