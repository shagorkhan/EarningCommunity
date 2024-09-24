import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import myImage from '../../assets/bkash.png';
import myImage2 from '../../assets/nagod.png';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function WithdrawHistory() {
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
        <Text style={{color:'white',fontSize:16,marginLeft:20}}>Withdraw History</Text>
      </View>
      <ScrollView>
      <View style={styles.background}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'white'}}>E4I78XTHKEIRTY</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#C6A600'}}>PENDING</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:2,marginBottom:7}}>
            <Text style={{color:'white',fontSize:13}}>200 ৳</Text>
            <Text style={{color:'#ADADAD',fontSize:13,marginLeft:40}}>11 JAN 2023</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage} style={styles.image} />
            </View>
            <View style={{marginLeft:15}}>
                <Text style={{color:'white'}}>Bkash Merchant</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
            </View>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'white'}}>E4I78XTHKEIRTY</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#C6A600'}}>PENDING</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:2,marginBottom:7}}>
            <Text style={{color:'white',fontSize:13}}>200 ৳</Text>
            <Text style={{color:'#ADADAD',fontSize:13,marginLeft:40}}>11 JAN 2023</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage} style={styles.image} />
            </View>
            <View style={{marginLeft:15}}>
                <Text style={{color:'white'}}>Bkash Merchant</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
            </View>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'white'}}>E4I78XTHKEIRTY</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#C6A600'}}>PENDING</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:2,marginBottom:7}}>
            <Text style={{color:'white',fontSize:13}}>200 ৳</Text>
            <Text style={{color:'#ADADAD',fontSize:13,marginLeft:40}}>11 JAN 2023</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage} style={styles.image} />
            </View>
            <View style={{marginLeft:15}}>
                <Text style={{color:'white'}}>Bkash Merchant</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
            </View>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'white'}}>E4I78XTHKEIRTY</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#C6A600'}}>PENDING</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:2,marginBottom:7}}>
            <Text style={{color:'white',fontSize:13}}>200 ৳</Text>
            <Text style={{color:'#ADADAD',fontSize:13,marginLeft:40}}>11 JAN 2023</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage} style={styles.image} />
            </View>
            <View style={{marginLeft:15}}>
                <Text style={{color:'white'}}>Bkash Merchant</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
            </View>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'white'}}>E4I78XTHKEIRTY</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#C6A600'}}>PENDING</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:2,marginBottom:7}}>
            <Text style={{color:'white',fontSize:13}}>200 ৳</Text>
            <Text style={{color:'#ADADAD',fontSize:13,marginLeft:40}}>11 JAN 2023</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage} style={styles.image} />
            </View>
            <View style={{marginLeft:15}}>
                <Text style={{color:'white'}}>Bkash Merchant</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
            </View>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'white'}}>E4I78XTHKEIRTY</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#C6A600'}}>PENDING</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:2,marginBottom:7}}>
            <Text style={{color:'white',fontSize:13}}>200 ৳</Text>
            <Text style={{color:'#ADADAD',fontSize:13,marginLeft:40}}>11 JAN 2023</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage} style={styles.image} />
            </View>
            <View style={{marginLeft:15}}>
                <Text style={{color:'white'}}>Bkash Merchant</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
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
    background:{
        backgroundColor:'#2E4053',
        height:122,
        marginHorizontal:10,
        marginTop:20,
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:10,
      },
      background2:{
        backgroundColor:'#2E4053',
        height:122,
        marginHorizontal:10,
        marginTop:10,
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:10,
      },
      image: {
        width: 50, // Adjust width as needed
        height: 50, // Adjust height as needed
        resizeMode: 'contain', // Adjust resize mode as needed
      },
})