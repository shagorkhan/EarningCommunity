import { View, Text,Modal,FlatList , StyleSheet, TextInput, TouchableOpacity, Button, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { getApi, postApi, putApi } from '../Function/Api';
import { useUser } from '../Provider/UserContext';




export default function EditProfile() {
    const navigation= useNavigation();
    const {user,loginUser}=useUser()
    const [name, setName] = useState(user?.name);
    //const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [loading, setLoading] = useState(false);
    const handleEditProfile = async () => {
      try {
          setLoading(true);
          // Validate password fields
          if (!name || !selectedGender || !selectedDate) {
              Alert.alert('Error', 'Please fill in all fields');
              setLoading(false);
              return;
          }
          // if (newPassword !== confirmPassword) {
          //     Alert.alert('Error', 'New password and confirm password must match');
          //     return;
          // }
          //console.log(selectedDate)
          // Make API request using postApi function
          const response = await putApi('/user/details', {
              name,
              gender:selectedGender,
              age:selectedDate
          });

          // Handle response
          //console.log('Change password response:', response);
          loginUser(response)


          // Optionally navigate to another screen upon successful password change
         navigation.navigate('MyProfileScreen');
      } catch (error) {
          console.error('Error updating user details:', error);
          Alert.alert('Error', error.response.data.error);
      } finally {
            setLoading(false);
        }
  };

    const handlePress =(val) =>{
    navigation.navigate(val);
      };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(user?.gender);
  const logo = <Ionicons name="male-female" size={24} color="white" /> // Your logo icon

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender.label);
    setModalVisible(false);
  };

  
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(user?.age));
  //const [age, setAge] = useState('');

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let userAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      userAge--;
    }
    return <Text style={{ color: 'white' }}>{userAge} years old</Text>;
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
      const calculatedAge = calculateAge(selectedDate);
      setAge(calculatedAge);
    }
  };
  useEffect(()=>{
    handleDateChange(null,new Date(user?.age))
  },[user])
  
  return (
    <SafeAreaView style={styles.container}>
        {/* <StatusBar backgroundColor="transparent" translucent={true} /> */}
        <View style={{flexDirection:'row',backgroundColor:'black',height:48,alignItems:'center',paddingHorizontal:10}}>
          <TouchableOpacity onPress={()=> handlePress('MyProfileScreen')}>
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{color:'white',fontSize:16,marginLeft:20}}>Edit Informations</Text>
        </View>
        <Text style={{color:'white',marginTop:20,paddingHorizontal:10,marginBottom:10}}>Full Name</Text>
        <View style={styles.input}>
          <MaterialIcons name="perm-identity" size={24} color="white" />
          <TextInput
            style={{marginLeft:5,color:'white',flex:1}}
            //onChangeText={setText}
            //value={text}
            placeholder="Type something..."
            placeholderTextColor="#E0E0E0"
            value={name}
            onChangeText={setName}
          />
        </View>
        <Text style={{color:'white',marginLeft:10,marginBottom:10}}>Gender</Text>

        <TouchableOpacity style={styles.selectBox} onPress={() => setModalVisible(true)}>
          <View style={styles.logoContainer}>{logo}</View>
          <Text style={styles.selectedGender}>{selectedGender || 'Select Gender'}</Text>
          <Icon name="angle-down" size={24} color="white" style={styles.arrowIcon} />
        </TouchableOpacity>
        {modalVisible && (
          <View style={styles.modalContainer}>
            {genders.map((gender) => (
              <TouchableOpacity
                key={gender.value}
                style={styles.option}
                onPress={() => handleGenderSelect(gender)}
              >
                <View style={styles.logoContainer}>{logo}</View>
                <Text style={styles.optionText}>{gender.label}</Text>
                {selectedGender === gender.label && (
                  <Icon name="check" size={20} color="#FFFFFF" style={styles.checkIcon} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Text style={{color:'white',marginLeft:10,marginBottom:10}}>Age</Text>

        <TouchableOpacity style={styles.inputContainer} onPress={() => setShowDatePicker(true)}>
          <MaterialIcons name="man-3" size={24} color="white" />
          {/* <Text style={styles.inputLabel}>Enter Age:</Text> */}
          <Text style={[styles.inputValue, !age && { color: 'white' }]}>{age || 'Select your birth date'}</Text>
          <Icon name="angle-down" size={24} color="white" style={styles.arrowIcon} />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
          />
        )}

      <CustomButton title="Update" onPress={handleEditProfile} buttonColor="#2E4053" />
      {loading && (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#FFFFFF" />
                </View>
            )}
    </SafeAreaView>
  ) 
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#4D4D4D',
  },
  input: {
    flexDirection:'row',
    height:42,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius:5,
    marginHorizontal:10,
    alignItems:'center',
    marginBottom:10,
    color:'white',
  },
  selectBox: {
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
  logoContainer: {
    marginRight: 5,
  },
  selectedGender: {
    flex: 1,
    fontSize: 16,
    color:'white'
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  modalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  optionText: {
    marginRight: 5,
    fontSize: 16,
    color:'white'
  },
  checkIcon: {
    marginLeft: 'auto',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginHorizontal:10,
    marginBottom:50,
    height:42,
  },
  inputLabel: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
  },
  inputValue: {
    flex: 2,
    fontSize: 16,
    color: '#666',
  },
  calendarIcon: {
    flex: 0.2,
  },
  loader: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
  
});