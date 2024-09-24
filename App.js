import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UserRoutes from "./src/routes/UserRoutes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from "./src/screens/EditProfile";
import ChangePhoneNumber from "./src/screens/ChangePhoneNumber";
import ChangePassword from "./src/screens/ChangePassword";
import WithdrawNow from "./src/screens/WithdrawNow";
import PurchaseList from "./src/screens/PurchaseList";
import PackageList from "./src/screens/PackageList";
import WalletList from "./src/screens/WalletList";
import AddWallet from "./src/screens/AddWallet";
import WithdrawHistory from "./src/screens/WithdrawHistory";
import WatchHistory from "./src/screens/WatchHistory";
import AccountScreen from "./src/screens/AccountScreen";
import MyProfileScreen from "./src/screens/MyProfileScreen";
import Login from "./src/screens/Login";
import ForgetPassword1 from "./src/screens/ForgetPassword1";
import ForgetNext from "./src/screens/ForgetNext";
import Register from "./src/screens/Register";
import RegisterNext from "./src/screens/RegisterNext";
import { LoaderProvider } from "./src/Provider/LoaderContext";
import { UserProvider } from "./src/Provider/UserContext";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { storeValue } from "./src/Function/Storage";
import axios from "axios";

const Stack = createNativeStackNavigator();

export default function App() {
  React.useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);
  return (
    <LoaderProvider>
      <UserProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{ headerShown: false }}
                name="HomeScreen"
                component={UserRoutes}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="ForgetPassword1"
                component={ForgetPassword1}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="ForgetNext"
                component={ForgetNext}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="Register"
                component={Register}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="RegisterNext"
                component={RegisterNext}
              />

              <Stack.Screen
                options={{ headerShown: false }}
                name="EditProfile"
                component={EditProfile}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="ChangePhoneNumber"
                component={ChangePhoneNumber}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="ChangePassword"
                component={ChangePassword}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="WithdrawNow"
                component={WithdrawNow}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="PurchaseList"
                component={PurchaseList}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="PackageList"
                component={PackageList}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="WalletList"
                component={WalletList}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="AddWallet"
                component={AddWallet}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="WithdrawHistory"
                component={WithdrawHistory}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="WatchHistory"
                component={WatchHistory}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="AccountScreen"
                component={AccountScreen}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="MyProfileScreen"
                component={MyProfileScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </UserProvider>
    </LoaderProvider>
  );
}
const registerForPushNotificationsAsync = async () => {
  const deviceId = Constants.deviceName
  const osVersion = Constants.sessionId
  const ip = await getIpAddress();
  //console.log(osVersion);
  await storeValue("ip", ip);
  await storeValue("os", osVersion);
  await storeValue("id", deviceId);
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notification!");
    return;
  }

  // Get the push token
  const token = (await Notifications.getExpoPushTokenAsync()).data;
  await storeValue("fcm", token);
  return token;
};
const getIpAddress = async () => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return null;
  }
};
