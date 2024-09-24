import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = ({ imageUrl, text, text2 }) => {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text2}>{text2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop:20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    //fontWeight: 'bold',
    textAlign: 'center',
    color:'white',
  },
  text2: {
    fontSize: 12,
    //fontWeight: 'bold',
    textAlign: 'center',
    color:'#2AA7EA',
    marginTop:2,
    marginBottom:10,
  },
});

export default Header;
