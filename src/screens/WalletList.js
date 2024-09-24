import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import myImage from '../../assets/bkash.png';
import myImage2 from '../../assets/nagod.png';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WalletList() {
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
        <Text style={{color:'white',fontSize:16,marginLeft:20}}>Wallet List</Text>
      </View>

      <ScrollView>
      <View style={styles.background}>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage} style={styles.image} />
            </View>
            <View style={{marginLeft:10}}>
                <Text style={{color:'white'}}>Bkash Personal</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <AntDesign name="delete" size={20} color="white" />
                <Text style={{color:'white',marginLeft:10}}>Delete Wallet</Text>
            </View>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage2} style={styles.image} />
            </View>
            <View style={{marginLeft:10}}>
                <Text style={{color:'white'}}>Nagod Personal</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <AntDesign name="delete" size={20} color="white" />
                <Text style={{color:'white',marginLeft:10}}>Delete Wallet</Text>
            </View>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage2} style={styles.image} />
            </View>
            <View style={{marginLeft:10}}>
                <Text style={{color:'white'}}>Nagod Personal</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <AntDesign name="delete" size={20} color="white" />
                <Text style={{color:'white',marginLeft:10}}>Delete Wallet</Text>
            </View>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage2} style={styles.image} />
            </View>
            <View style={{marginLeft:10}}>
                <Text style={{color:'white'}}>Nagod Personal</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <AntDesign name="delete" size={20} color="white" />
                <Text style={{color:'white',marginLeft:10}}>Delete Wallet</Text>
            </View>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage2} style={styles.image} />
            </View>
            <View style={{marginLeft:10}}>
                <Text style={{color:'white'}}>Nagod Personal</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <AntDesign name="delete" size={20} color="white" />
                <Text style={{color:'white',marginLeft:10}}>Delete Wallet</Text>
            </View>
        </View>
      </View>

      <View style={styles.background2}>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}}>
                <Image source={myImage2} style={styles.image} />
            </View>
            <View style={{marginLeft:10}}>
                <Text style={{color:'white'}}>Nagod Personal</Text>
                <Text style={{color:'white'}}>01763628322</Text>
                <Text style={{color:'white'}}>MST. Tasnia Alam</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'#BBBBBB'}}>11 JUN 2024</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <AntDesign name="delete" size={20} color="white" />
                <Text style={{color:'white',marginLeft:10}}>Delete Wallet</Text>
            </View>
        </View>
      </View>
      </ScrollView>
      <TouchableOpacity onPress={()=>handlePress('AddWallet')} style={{position: 'absolute', bottom: 40, right: 20, zIndex: 10}}>
        <FontAwesome5 name="plus-circle" size={32} color="white" />
      </TouchableOpacity>
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
        
        marginHorizontal:10,
        marginTop:20,
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:10,
      },
      background2:{
        backgroundColor:'#2E4053',
       
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