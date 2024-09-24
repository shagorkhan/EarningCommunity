import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import VideoCard from '../components/VideoCard';
import { useNavigation } from '@react-navigation/native';

export default function WatchHistory() {
    const navigation= useNavigation();
    const handlePress =(val) =>{
    navigation.navigate(val);
      };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',backgroundColor:'black',height:48,alignItems:'center',paddingHorizontal:10}}>
      <TouchableOpacity onPress={()=> handlePress('AccountScreen')}>
         <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:16,marginLeft:20}}>Watch History</Text>
      </View>

    <ScrollView>
    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        <View style={styles.container2}>
            <Image source={require('../../assets/image25.png')} style={styles.image} />
            <View style={styles.overlay}>
                <TouchableOpacity style={{marginTop:50}}>
                    <AntDesign name="play" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Introducing Our</Text>
                <Text style={styles.title}>newest package:...</Text>
                <View style={styles.timing}>
                    <Text style={styles.time}>11 jun 2024</Text>
                    <Text style={styles.time}>20m 20s</Text>
                </View>
            </View>
        </View>

        <View style={styles.container2}>
            <Image source={require('../../assets/image25.png')} style={styles.image} />
            <View style={styles.overlay}>
                <TouchableOpacity style={{marginTop:50}}>
                    <AntDesign name="play" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Introducing Our</Text>
                <Text style={styles.title}>newest package:...</Text>
                <View style={styles.timing}>
                    <Text style={styles.time}>11 jun 2024</Text>
                    <Text style={styles.time}>20m 20s</Text>
                </View>
            </View>
        </View>

        <View style={styles.container2}>
            <Image source={require('../../assets/image25.png')} style={styles.image} />
            <View style={styles.overlay}>
                <TouchableOpacity style={{marginTop:50}}>
                    <AntDesign name="play" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Introducing Our</Text>
                <Text style={styles.title}>newest package:...</Text>
                <View style={styles.timing}>
                    <Text style={styles.time}>11 jun 2024</Text>
                    <Text style={styles.time}>20m 20s</Text>
                </View>
            </View>
        </View>

        <View style={styles.container2}>
            <Image source={require('../../assets/image25.png')} style={styles.image} />
            <View style={styles.overlay}>
                <TouchableOpacity style={{marginTop:50}}>
                    <AntDesign name="play" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Introducing Our</Text>
                <Text style={styles.title}>newest package:...</Text>
                <View style={styles.timing}>
                    <Text style={styles.time}>11 jun 2024</Text>
                    <Text style={styles.time}>20m 20s</Text>
                </View>
            </View>
        </View>
        <View style={styles.container2}>
            <Image source={require('../../assets/image25.png')} style={styles.image} />
            <View style={styles.overlay}>
                <TouchableOpacity style={{marginTop:50}}>
                    <AntDesign name="play" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Introducing Our</Text>
                <Text style={styles.title}>newest package:...</Text>
                <View style={styles.timing}>
                    <Text style={styles.time}>11 jun 2024</Text>
                    <Text style={styles.time}>20m 20s</Text>
                </View>
            </View>
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#4D4D4D',
    },

    container2: {
        backgroundColor: '#2E4053',
        borderRadius: 5,
        overflow: 'hidden',
        //margin: 10,
        marginLeft:10,
        //elevation: 5, // For Android shadow
        width:'46%',
        marginTop:10
      },
      image: {
        width: '100%',
        height: 180,
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        //justifyContent: 'center',
        
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black overlay
      },
      content: {
        padding: 5,
      },
      title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
      },
      time: {
        fontSize:12,
        color:'white'
      },
      timing: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:2,
      },
})