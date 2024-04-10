import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Modal, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
import { FormTextInput, ShowHidePasssword } from "../Components/TextInput";
import Buttons from "../Components/Buttons";

const Login = () => {
  const navigation = useNavigation(); 
  const [hidePassword, setHidePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogin = async () => {
    try {
      console.log('Logging in...');
      console.log('Successfully Logged In!');
      setIsSignedIn(true);
      navigation.navigate('Dashboard'); 
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} resizeMode="cover" source={require('../assets/SecondFrame.jpg')}>
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Welcome to Cafe Aroma!</Text>
            <Text style={styles.textSubHeader}>Sign in to continue</Text>
          </View>
          <View style={styles.form}>
            <FormTextInput
              title="Username"
              value={username}
              onChangeText={(value) => setUsername(value)}
            />
            <View style={styles.password}>
              <FormTextInput
                title="Password"
                value={password}
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={!hidePassword}
              />
            </View>
            <ShowHidePasssword
              onPress={handleHidePassword}
              state={hidePassword}
            />
            <Buttons
              title="Log in"
              onPress={handleLogin} 
            />
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isSignedIn}
            onRequestClose={() => setIsSignedIn(false)}
          >
            <View style={styles.modal}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>You have successfully signed in!</Text>
                <Pressable style={styles.modalButton} onPress={() => setIsSignedIn(false)}>
                  <Text>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  textHeader: {
    color: 'white',
    fontSize: 45,
    fontFamily: 'poppinsBold',
  },
  textSubHeader: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'poppinsLight',
  },
  header: {
    padding: 10,
    margin: 10,
  },
  background: {
    flex: 1,
    width: '100%', 
    height: '100%', 
  },
  form: {
    backgroundColor: 'C19A6B',
    margin: 10,
    padding: 10,
    borderRadius: 15,
    gap: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  forgotpassword: {
    color: 'lightblue',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: "#FFC20F",
    padding: 10,
    borderRadius: 10,
    gap: 10,
    borderColor: "white",
    borderWidth: 2,
  },
  modalText: {
    fontSize: 18,
  },
  modalButton: {
    backgroundColor: 'rgb(209, 165, 12)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 260,
    borderRadius: 10,
  },
});
