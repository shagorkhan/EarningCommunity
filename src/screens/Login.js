import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation= useNavigation();
  const handlePress =(val) =>{
  navigation.navigate(val);
  };
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <View style={styles.content}>
            <Image source={require('../../assets/Hamilon.png')} style={styles.image} />
            
        </View>
        <Text style={{fontSize:16,color:'white',marginLeft:10,marginBottom:10,marginTop:20}}>Phone Number</Text>
        <View style={styles.inputContainer}>
            <Feather name="phone-incoming" size={20} color="white" style={{marginRight:10}} />
            <TextInput
            style={styles.input}
            placeholder="01*********"
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
            placeholder="********"
            placeholderTextColor="white"
            />
        </View>

        <View style={{flexDirection:'row',marginHorizontal:10,justifyContent:'space-between',marginTop:15,marginBottom:50}}>
            <TouchableOpacity onPress={()=> handlePress('ForgetPassword1')}>
                <Text style={{color:'#CC9123',fontSize:16,textDecorationLine: 'underline',}}>Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handlePress('Register')}>
                <Text style={{color:'#CC9123',fontSize:16,textDecorationLine: 'underline',}}>Register Now</Text>
            </TouchableOpacity>
        </View>

        <CustomButton title="Log In" onPress={handlePress} buttonColor="#2E4053" />

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
      input: {
        flex: 1,
        color: 'white',
        fontSize: 14,
      },
})