import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { getApi, putApi } from "../Function/Api";
import { useLoader } from "../Provider/LoaderContext";

export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [key, setKey] = useState();
  const [otp, setOtp] = useState();
  const [ckey, setCkey] = useState();
  const navigation = useNavigation();
  const { showLoader, hideLoader } = useLoader();
  const initialTime = 300; // 300 seconds = 5 minutes
  const [timer, setTimer] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, [timer, isRunning]); // Only re-run the effect if timer state or isRunning state changes

  const startTimer = () => {
    setTimer(initialTime);
    setIsRunning(true);
  };

  const resetTimer = () => {
    setTimer(initialTime);
    setIsRunning(false);
  };
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const handlePress = (val,data) => {
    navigation.navigate(val,data);
  };
  const senOTP = async () => {
    showLoader();
    try {
      const data = await getApi("/auth/create", {
        phoneNumber: phoneNumber,
      });
      //console.log(data)
      setKey(data.key);
      startTimer()
      hideLoader();
    } catch (error) {
      hideLoader();
      Alert.alert(error.response.data.error);
      console.error(error);
    }
  };
  const checkOTP = async () => {
    showLoader();
    try {
      const data = await putApi("/auth/create", {
        OTP: otp,
        key: key,
      });
      //console.log(data);
      hideLoader();
      setCkey(data.token);
      navigation.navigate("RegisterNext",{
        token:ckey
      });
      
    } catch (error) {
      hideLoader();
      Alert.alert(error.response.data.error);
      console.error(error);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "black",
            height: 48,
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 16, marginLeft: 20 }}>
            Register
          </Text>
        </View>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={styles.content}>
          <Image
            source={require("../../assets/Hamilon.png")}
            style={styles.image}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            color: "white",
            marginLeft: 10,
            marginBottom: 10,
            marginTop: 20,
          }}
        >
          Phone Number
        </Text>
        <View style={styles.inputContainer}>
          <Feather
            name="phone-incoming"
            size={20}
            color="white"
            style={{ marginRight: 10 }}
          />
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.input}
            placeholder="01761232343"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
            maxLength={13} // Adjust this based on your phone number format
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Feather name="alert-triangle" size={20} color="red" />
            <Text style={{ color: "white", marginLeft: 8, fontSize: 13 }}>
              Not Verified
            </Text>
          </View>

          <TouchableOpacity onPress={senOTP}>
            <View style={{ flexDirection: "row" }}>
              <Octicons name="verified" size={20} color="green" />
              <Text style={{ color: "white", marginLeft: 8, fontSize: 13 }}>
                Verify Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 16,
            marginLeft: 10,
            marginVertical: 10,
            color: "white",
            marginTop: 15,
          }}
        >
          OTP
        </Text>
        <View style={styles.inputContainer2}>
          <TextInput
            value={otp}
            onChangeText={setOtp}
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>
        {key && (
          <Text
            style={{ color: "white", textAlign: "center", marginBottom: 5 }}
          >
            Timer: {minutes < 10 ? "0" : ""}
            {minutes}:{seconds < 10 ? "0" : ""}
            {seconds}
          </Text>
        )}

        <CustomButton
          title="Next"
          onPress={() => checkOTP()}
          buttonColor={"#2E4053" }
        />
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4D4D",
  },
  content: {
    //flex: 1,
    alignItems: "center",
    //justifyContent: 'center',
    marginTop: 100, // Adjust the margin top as needed
  },
  image: {
    width: 90, // Adjust width and height according to your image size
    height: 90,
    resizeMode: "contain", // Adjust resizeMode as needed
  },
  inputContainer: {
    flexDirection: "row",
    height: 42,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 10,
    //marginBottom: 10,
    marginHorizontal: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  inputContainer2: {
    flexDirection: "row",
    height: 42,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 10,
    //marginBottom: 10,
    marginHorizontal: 10,
    alignItems: "center",
    marginBottom: 40,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 14,
  },
});
