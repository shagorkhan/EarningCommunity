import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import AccountScreen from '../screens/AccountScreen';
import CategoryScreen from '../screens/CategoryScreen';
import { useUser } from '../Provider/UserContext';
import UserHomeScreen from '../screens/UserHomeScreen';

const Tab = createBottomTabNavigator();

export default function UserRoutes({navigation }) {
  const {user}=useUser()
  if(!user){
    return <HomeScreen navigation={navigation}/>
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Category") {
            iconName = focused ? "list-sharp" : "list-sharp";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications-outline" : "notifications-outline";
          } else if (route.name === "MyProfile") {
            iconName = focused ? "person-circle-outline" : "person-circle-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person-outline" : "person-outline";
          }

          // Return the Ionicons component with the appropriate icon name
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle:{ backgroundColor: 'black' }
      })}
      tabBarOptions={{
        activeTintColor: '#E3A832',
        inactiveTintColor: 'white',
      }}
      
    >
      <Tab.Screen name="Home" component={UserHomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} />
      <Tab.Screen name="MyProfile" component={MyProfileScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
