import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Octicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { getApi, postApi } from '../Function/Api'; // Import the postApi function

export default function ChangePassword() {
    const navigation = useNavigation();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = async () => {
        try {
            // Validate password fields
            if (!oldPassword || !newPassword || !confirmPassword) {
                Alert.alert('Error', 'Please fill in all fields');
                return;
            }
            if (newPassword !== confirmPassword) {
                Alert.alert('Error', 'New password and confirm password must match');
                return;
            }

            // Make API request using postApi function
            const response = await postApi('/user/change-password', {
                oldPassword,
                newPassword
            });

            // Handle response
            console.log('Change password response:', response.data);

            // Optionally navigate to another screen upon successful password change
            navigation.navigate('MyProfileScreen');
        } catch (error) {
            console.error('Error changing password:', error);
            Alert.alert('Error', error.response.data.error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', backgroundColor: 'black', height: 48, alignItems: 'center', paddingHorizontal: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 16, marginLeft: 20 }}>Change Password</Text>
            </View>
            <View style={{marginTop:10}}>
              <Text style={styles.label}>Old Password</Text>
            </View>
            <View style={styles.inputContainer}>
                <Octicons name="key" size={20} color="white" style={{ marginRight: 10 }} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter old password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    value={oldPassword}
                    onChangeText={setOldPassword}
                />
            </View>

            <Text style={styles.label}>New Password</Text>
            <View style={styles.inputContainer}>
                <Octicons name="key" size={20} color="white" style={{ marginRight: 10 }} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter new password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
            </View>

            <Text style={styles.label}>Confirm Password</Text>
            <View style={{marginBottom:30}}>
              <View style={styles.inputContainer}>
                  <Octicons name="key" size={20} color="white" style={{ marginRight: 10 }} />
                  <TextInput
                      style={styles.input}
                      placeholder="Confirm new password"
                      placeholderTextColor="white"
                      secureTextEntry={true}
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                  />
              </View>
            </View>
            <CustomButton title="Update" onPress={handleChangePassword} buttonColor="#2E4053" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4D4D4D',
        padding: 10
    },
    inputContainer: {
        flexDirection: 'row',
        height: 42,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        color: 'white',
        fontSize: 14,
    },
    label: {
        fontSize: 16,
        //marginLeft: 10,
        marginVertical: 10,
        color: 'white'
    }
});
