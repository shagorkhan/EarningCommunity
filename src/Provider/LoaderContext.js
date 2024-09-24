import React, { createContext, useState, useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// Create context for loader
const LoaderContext = createContext();

// Provider component
export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  );
};

// Consumer hook
export const useLoader = () => useContext(LoaderContext);

// Loader component
export const Loader = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoaderContext;
