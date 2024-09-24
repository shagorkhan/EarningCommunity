import { View, Text, ScrollView, StyleSheet, Image, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { postApi } from '../Function/Api';
import { useUser } from '../Provider/UserContext';
import { storeValue } from '../Function/Storage';
import { useLoader } from '../Provider/LoaderContext';

export default function RegisterNext({route,navigation}) {
  const { token } = route.params;
  const {loginUser}=useUser()
  const { showLoader, hideLoader } = useLoader();
  console.log(token);

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handlePress =(val) =>{
  navigation.navigate(val);
  };

  const createUser = async () => {
    showLoader();
    try {
      const data = await postApi("/auth/create", {
        name: name,
        password:password,
        token:token,
      });
      loginUser(data.user)
      await storeValue("token",data.userToken)
      //console.log(data)
      navigation.navigate("HomeScreen")
      //startTimer()
      hideLoader();
    } catch (error) {
      hideLoader();
      Alert.alert(error.response.data.error);
      console.error(error);
    }
  };
 
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row',backgroundColor:'black',height:48,alignItems:'center',paddingHorizontal:10}}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{color:'white',fontSize:16,marginLeft:20}}>Register </Text>
        </View>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <View style={styles.content}>
            <Image source={require('../../assets/Hamilon.png')} style={styles.image} />
            
        </View>

        <Text style={{fontSize:16,marginLeft:10,marginVertical:10,color:'white'}}>Full Name </Text>
        <View style={styles.inputContainer}>
            <Octicons name="key" size={20} color="white" style={{marginRight:10}} />
            <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholder="Give your name"
            placeholderTextColor="white"
            />
        </View>

        <Text style={{fontSize:16,marginLeft:10,marginVertical:10,color:'white'}}>Password</Text>
        <View style={styles.inputContainer2}>
            <Octicons name="key" size={20} color="white" style={{marginRight:10}} />
            <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="white"
            />
        </View>

        <CustomButton title="Register Now" onPress={createUser} buttonColor="#2E4053" />

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