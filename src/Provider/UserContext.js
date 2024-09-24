import React, { createContext, useState, useContext, useEffect } from 'react';
import { getApi } from '../Function/Api';
import { Loader } from './LoaderContext';
import { storeValue } from '../Function/Storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create context for user
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader]=useState(true)
  const [reload, setReload]=useState(true)

  const loginUser = (userData) => {
    setUser(userData);
  };
  const reloadUser = () => {
    setReload(Math.random());
  };

  const logoutUser = async() => {
    setUser(null);
    try {
      await AsyncStorage.removeItem("token")
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(()=>{
    getApi("/user/details").then(data=>{
        setUser(data)
        setLoader(false)
    }).catch(err=>{
        setLoader(false)
    })
  },[reload])

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser,reloadUser }}>
        {loader?(<Loader/>):children}
    </UserContext.Provider>
  );
};

// Hook to access user context
export const useUser = () => useContext(UserContext);
