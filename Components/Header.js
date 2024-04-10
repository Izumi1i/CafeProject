import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const logo = require('../assets/logoUpdated.png');

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC20F',
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'poppinsBold',
    color: 'black',
  },
});
