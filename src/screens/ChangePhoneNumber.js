import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { AntDesign, Feather, Octicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { getApi, putApi } from "../Function/Api";
import { useLoader } from "../Provider/LoaderContext";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [key, setKey] = useState('');
  const [otp, setOtp] = useState('');
  const [ckey, setCkey] = useState('');
  const [timer, setTimer] = useState(300); // 300 seconds = 5 minutes
  const [isRunning, setIsRunning] = useState(false);
  const navigation = useNavigation();
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    let interval;

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, isRunning]);

  const startTimer = () => {
    setTimer(300);
    setIsRunning(true);
  };

  const handleSendOTP = async () => {
    if (!phoneNumber) {
      Alert.alert('Phone number is required.');
      return;
    }

    showLoader();

    try {
      const data = await getApi("/user/details", {
        phoneNumber: phoneNumber,
      });

      setKey(data.key);
      startTimer();
      hideLoader();
    } catch (error) {
      hideLoader();
      Alert.alert(error.response.data.error);
      console.error(error);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp) {
      Alert.alert('OTP is required.');
      return;
    }

    showLoader();

    try {
      const data = await putApi("/user/details", {
        OTP: otp,
        key: key,
      });

      setCkey(data.token);
      navigation.navigate("MyProfileScreen", { token: ckey });
      hideLoader();
    } catch (error) {
      hideLoader();
      Alert.alert(error.response.data.error);
      console.error(error);
    }
  };

  const handleCancel = () => {
    // Reset timer and navigate back
    setTimer(300);
    setIsRunning(false);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Update Phone Number</Text>
      </View>
      <Text style={{marginTop:15,color:'white',fontSize:16}}>New Phone Number</Text>
      <View style={styles.inputContainer}>
        <Feather name="phone-incoming" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="+8801761232343"
          placeholderTextColor="gray"
          keyboardType="phone-pad"
          maxLength={13} // Adjust this based on your phone number format
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View style={styles.verificationContainer}>
        <View style={styles.statusContainer}>
          <Feather name="alert-triangle" size={20} color="red" />
          <Text style={styles.statusText}>Not Verified</Text>
        </View>
        <TouchableOpacity onPress={handleSendOTP}>
          <View style={styles.verifyContainer}>
            <Octicons name="verified" size={20} color="green" />
            <Text style={styles.verifyText}>Verify Now</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <Octicons name="key" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="white"
          secureTextEntry
        />
      </View>
      <Text style={styles.label}>OTP</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="white"
          keyboardType="numeric"
          maxLength={6} // Adjust as necessary
          value={otp}
          onChangeText={setOtp}
        />
      </View>
      {timer > 0 && (
        <Text style={styles.timerText}>
          Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}
        </Text>
      )}
      <CustomButton title="Update" onPress={handleVerifyOTP} buttonColor="#2E4053" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D4D4D',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'black',
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 42,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  verificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 15,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 13,
  },
  verifyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 13,
  },
  label: {
    fontSize: 16,
    color: 'white',
    //marginLeft: 10,
    //marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 14,
  },
  timerText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ChangePhoneNumber;
