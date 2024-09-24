import React, { useEffect, useRef } from 'react';
//import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView, StatusBar, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import VideoCard from '../components/VideoCard';
import { useUser } from '../Provider/UserContext';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const {user}=useUser()
  const swiperRef = useRef(null);
  const handleNextSlide = () => {
    swiperRef.current.scrollBy(1);
  };

  const handlePress = () => {
    // Handle button press action here
    console.log('Button pressed');
  };

  
  const scrollViewRef = useRef(null); // Create a ref for the ScrollView

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Search..."
                placeholderTextColor="#FFFFFF"
                />
              <Ionicons name="search" size={17} color="#fff" style={styles.icon} />
            </View>
        </View>
        <ScrollView>
        <View style={styles.container2}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay={true}
            paginationStyle={{ bottom: 10 }}
            height={height * 0.5} // Set slider height to 50% of screen height
          >
            {/* Slide 1 */}
            <View style={styles.slide}>
              <Image
                source={require('../../assets/imageslider1.png')}
                style={styles.image}
              />
            </View>
            {/* Slide 2 */}
            <View style={styles.slide}>
              <Image
                source={require('../../assets/imageslider2.png')}
                style={styles.image}
              />
            </View>
            {/* Add more slides as needed */}
          </Swiper>
        </View>
      <View style={styles.card2}>
        <View style={styles.card}>
          <View style={styles.leftContainer}>
            <Text style={{color:'white', fontSize: 14}}>With our supportive community and innovative monetization features, you can turn your passion into profit. Participate in tournaments, collaborate with fellow creators, and engage with your audience to maximize your earnings potential.</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image source={require('../../assets/registerlogo.png')} style={styles.logo} />
          </View>
        </View>
        <CustomButton title="Register Now" onPress={()=>{
          navigation.navigate("Register")
        }} buttonColor="#2E4053" />
      </View>
      <Text style={{color:'white',marginTop:10,marginLeft:10}}>PACKAGES</Text>
      
        <View style={styles.cardsContainer}>
          <ScrollView ref={scrollViewRef} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card3}>
            
              <Text style={{fontSize:14,color:'white', textAlign:'center'}}>Play Package</Text>
              <Text style={{fontSize:12,color:'white', textAlign:'center', marginTop:5}}>200 ৳</Text>
              <Text style={{fontSize:12,color:'white', textAlign:'center'}}>3 months</Text>
              <Text style={{fontSize:12,color:'white',marginTop:5,marginBottom:10,paddingHorizontal:20,textAlign:'justify'}}>Unlock a world of possibilities with our affordable and flexible package. For just 200 BDT, you'll gain access to our platform for a full three months, giving you ample time to explore, learn, and grow. Whether you're looking to enhance your skills, dive into new hobbies, or simply </Text>
              <CustomButton title="Purchase Now" onPress={()=>{
                if(user){
                  navigation.navigate("")
                }else{
                  navigation.navigate("Login")
                }
              }} buttonColor="#2E4053" />
            </View>
           
            </ScrollView>
            <TouchableOpacity
               style={[styles.arrowButton, styles.leftArrow]}
               onPress={() => scrollViewRef.current.scrollTo({ x: 0, animated: true })}
                >
              <View style={styles.arrowContainer}>
                <MaterialIcons name="keyboard-arrow-left" size={22} color="white" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.arrowButton, styles.rightArrow]}
              onPress={() => scrollViewRef.current.scrollTo({ x: width, animated: true })}
              >
              <View style={styles.arrowContainer}>
                <MaterialIcons name="keyboard-arrow-right" size={22} color="white" />
                </View>
            </TouchableOpacity>
        </View>
          <Text style={{color:'white',marginLeft:10,marginVertical:10}}>ENTERTAINMENT</Text>
          <ScrollView horizontal={true}>
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
          </ScrollView>
          <Text style={{color:'white',marginLeft:10,marginVertical:10}}>NEWS</Text>
          <ScrollView horizontal={true}>
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
          </ScrollView>
          <Text style={{color:'white',marginLeft:10,marginVertical:10}}>LIVE</Text>
          <ScrollView horizontal={true}>
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
              <VideoCard
                imageSource={require('../../assets/image25.png')} // Replace with your image source
                title="Introducing Our"
                title2="newest package:..."
                date="11 jun 2024"
                somoy="20m 20s"
                onPress={handlePress}
              />
          </ScrollView>
          <View style={styles.footercontainer}>
            <View>
              <Text style={{color:'white'}}>Join into</Text>
              <Text style={{color:'white'}}>our member</Text>
              <Text style={{color:'white'}}>community</Text>
            </View>
            <View style={styles.footerright}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/youtubelogo.png')} // Replace with your logo source
                  style={styles.logo}
                  />
              </TouchableOpacity>
              
              <TouchableOpacity>
                <Image
                  source={require('../../assets/whatsapplogo.png')} // Replace with your logo source
                  style={styles.logo}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/telegramlogo.png')} // Replace with your logo source
                  style={styles.logo}
                  />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/facebooklogo.png')} // Replace with your logo source
                  style={styles.logo}
                  />
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: height * 0.4,
    // width: '100%',
    backgroundColor: '#4D4D4D',
  },
  container2:{
    height: height * 0.3,
    width: '100%',
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginTop: 5,
  },
  categoryWrapper: {
    marginLeft: 10,
  },
  category: {
    fontSize: 14,
    color: '#fff', // Text color of categories
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#85929E',
    borderRadius: 10,
    padding: 10,
    marginTop:5,
  },
  card2: {
    backgroundColor: '#85929E',
    borderRadius: 5,
    padding: 10,
    paddingBottom:10,
    marginTop:10,
    marginHorizontal:10
  },
  cardsContainer: {
    flexDirection: 'row',
    //paddingHorizontal: 5,
    marginLeft:10,
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
  },
  card3: {
    backgroundColor: '#85929E',
    borderRadius: 5,
    padding: 10,
    //paddingBottom: 10,
    marginRight: 10,
    width: width - 20, // Set width to screen width minus padding
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowContainer: {
    width: 22, // Adjust container size as needed
    height: 22, // Adjust container size as needed
    borderRadius: 20, // Make the container round
    backgroundColor: 'rgba(0,0,0,0.5)', // Adjust background color and opacity as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftArrow: {
    left: 0,
    transform: [{ translateX: -10 }],
  },
  rightArrow: {
    right: 0,
    transform: [{ translateX: 0 }],
  },
  leftContainer: {
    flex: 1,
    marginTop: 2,
    marginRight: 20,
    marginBottom:5
  },
  rightContainer: {
    marginLeft: 10,
  },
  searchContainer: {
    padding: 3,
    borderTopColor: '#ccc',
    paddingHorizontal:10,
    flexDirection: 'row',
    position: 'absolute',
    marginTop:24,
    //top: 2,
    zIndex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    backgroundColor: '#85929E',
    paddingHorizontal: 10,
    borderRadius: 30,
    flex: 1,
  },
  input: {
    height: 35,
    backgroundColor: '#85929E',
    paddingHorizontal: 10,
    borderRadius: 30,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  footercontainer:{
    width: '100%',
    height: 60,
    backgroundColor: '#253C5E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  footerright:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end'
    
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});

export default HomeScreen;
