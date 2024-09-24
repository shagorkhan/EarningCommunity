import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator  } from 'react-native';
import Header from '../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../Provider/UserContext';
import { getApi, postApi } from '../Function/Api'; 

export default function MyProfileScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  // Function to handle logout
  const handleLogout = async () => {
    try {
      setLoading(true); // Start loading
      // Make a POST request to the logout endpoint
      await getApi('/user/logout');
      
      // Call the logoutUser function to clear user data from context
      logoutUser();
      
      // Navigate to the login screen or any other appropriate screen
      navigation.navigate('UserHomeScreen');
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const { user, logoutUser  } = useUser();
  const [name, setName] = useState(user?.name);
  const [gender, setSelectedGender] = useState(user?.gender);
  const [age, setSelectedDate] = useState(user?.age);
  const [balance, setbalance] = useState(user?.balance);

  useEffect(() => {
    // Update the name state when the user context changes
    setName(user?.name);
}, [user]);

  useEffect(() => {
    // Update the name state when the user context changes
    setSelectedGender(user?.gender);
  }, [user]);

  useEffect(() => {
    // Update the name state when the user context changes
    setSelectedDate(user?.age);
  }, [user]);

  useEffect(() => {
    // Update the name state when the user context changes
    setbalance(user?.balance);
  }, [user]);
  //console.log(user);

  const handlePress = (val) => {
    navigation.navigate(val);
  };
  const calculateAge = (birthdate) => {
    // Convert birthdate to Date object
    const birthDate = new Date(birthdate);
    
    // Get current date
    const currentDate = new Date();

    // Calculate the difference in years
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();
    const currentDay = currentDate.getDate();
    const birthDay = birthDate.getDate();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    return age;
};

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
          <Text style={{marginLeft:10,color:'white'}}>{balance} tk</Text>
        </View>
      </View>
      <View style={{borderBottomWidth:.6, borderBottomColor: '#FFFFFF',marginTop:15,marginHorizontal:10}}></View>
      <View style={{flexDirection:'row',margin:10,justifyContent:'space-between'}}>
        <Text style={{color:'white', fontSize:16}}>Informations</Text>
        <TouchableOpacity onPress={()=>handlePress('EditProfile')}>
          <Feather name="edit" size={20} color="white" />
        </TouchableOpacity>
      </View>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center',marginBottom:15}}>
        <MaterialIcons name="perm-identity" size={24} color="white" />
        <View style={{marginLeft:10}}>
          <Text style={{color:'white',fontSize:16}}>Full Name</Text>
          <Text style={{color:'white',fontSize:14}}>{name}</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginBottom:15}}>
        <MaterialCommunityIcons name="gender-male-female" size={26} color="white" />
        <View style={{marginLeft:10}}>
          <Text style={{color:'white',fontSize:16}}>Gender</Text>
          <Text style={{color:'white',fontSize:14}}>{gender}</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',marginLeft:15,alignItems:'center',marginBottom:15}}>
        <FontAwesome name="male" size={26} color="white" />
        <View style={{marginLeft:16}}>
          <Text style={{color:'white',fontSize:16}}>Age</Text>
          <Text style={{color:'white',fontSize:14}}>{calculateAge(age)} years old</Text>
        </View>
      </View>
      <View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:10,alignItems:'center',marginBottom:15}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Feather name="phone-incoming" size={23} color="white" />
          <View style={{marginLeft:10}}>
            <Text style={{color:'white',fontSize:16}}>Phone Number</Text>
            <Text style={{color:'white',fontSize:14}}>+8801234567890</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>handlePress('ChangePhoneNumber')}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Feather name="refresh-cw" size={23} color="white" />
            <Text style={{color:'white',marginLeft:10,marginRight:10}}>Change</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>handlePress('ChangePassword')} style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginBottom:15}}>
        <Foundation name="key" size={26} color="white" />
        <View style={{marginLeft:10}}>
          <Text style={{color:'white',fontSize:16}}>Change Password</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginBottom:15}}>
        <AntDesign name="eye" size={24} color="white" />
        <View style={{marginLeft:10}}>
          <Text style={{color:'white',fontSize:16}}>Dark Theme</Text>
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginBottom:15}}>
        <Ionicons name="language" size={24} color="white" />
        <View style={{marginLeft:10}}>
          <Text style={{color:'white',fontSize:16}}>Change To Bangla</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout} style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginBottom:15}}>
        <AntDesign name="logout" size={24} color="white" />
        <View style={{marginLeft:10}}>
          <Text style={{color:'white',fontSize:16}}>LogOut</Text>
        </View>
      </TouchableOpacity>
      {loading && (
        <View style={[StyleSheet.absoluteFill, styles.loader]}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      )}
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
  loader: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});