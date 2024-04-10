import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const userPhoto = require('../assets/userPhoto2.png');

const FilterBar = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.userPhotoContainer}>
        <Image style={styles.userPhoto} source={userPhoto} resizeMode="contain" />
      </View>
      <Pressable onPress={onPress} style={styles.searchIcon}>
        <FontAwesome name="search" size={20} color="black" />
      </Pressable>
    </View>
  );
};

export default FilterBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC20F',
    flexDirection: 'row',
    height: 75, 
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginBottom: 10,
  },
  searchIcon: {
    paddingHorizontal: 15,
    marginTop: 25, 
  },
  userPhotoContainer: {
    marginTop: 25, 
  },
  userPhoto: {
    width: 40, 
    height: 40, 
    borderRadius: 30, 
  },
});
