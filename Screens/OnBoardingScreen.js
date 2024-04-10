import React from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Dimensions, Image } from "react-native";
import Buttons from "../Components/Buttons";

const OnBoardingScreen = ({ navigation }) => {
  const clickHandlerDashboard = () => {
    navigation.navigate('Dashboard'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} resizeMode="cover" source={require('../assets/FirstFrame2.jpg')}>
        <View style={styles.overlay}>
          <View style={styles.contents}>
            <View style={styles.logoContainer}>
              <Image source={require('../assets/logo6.png')} style={styles.logo} resizeMode="contain" />
            </View>
            <View style={styles.upperPart}>
                <Text style={styles.textHeader}>Want Delicious Coffee? One Click at a Time.</Text>
            </View>
            <View style={styles.lowerPart}>
              <Buttons
                title="Let's Get Started"
                onPress={clickHandlerDashboard} 
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
  },
  contents: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: height * 0.01, 
  },
  logo: {
    width: width * 0.7,
    height: height * 0.4,
  },
  upperPart: {
    alignItems: 'center',
    marginTop: height * 0.43, 
  },
  lowerPart: {  
    marginBottom: height * 0.045, 
  },
  textHeader: {
    fontSize: width * 0.035, 
    textAlign: 'center',
    fontFamily: 'poppinsBold',
    marginBottom: 1,
    color: 'white'
  },
  textSubHeader: {
    textAlign: 'center',
    fontSize: width * 0.035, 
    width: '80%', 
    fontFamily: 'poppinsLight',
    color: 'white'
  },
});
