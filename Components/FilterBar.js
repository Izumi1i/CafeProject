import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FilterBar = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('SearchScreen');
  }
  
  const onMenuPress = () => {
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onMenuPress} style={styles.menuIcon}>
        <FontAwesome name="bars" size={24} color="black" />
      </Pressable>
      {/* Search button */}
      <Pressable onPress={() => onPress()} style={styles.searchIcon}>
        <FontAwesome name="search" size={20} color="black" />
      </Pressable>
    </View>
  )
}

export default FilterBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2B48C',
    flexDirection: 'row',
    height: 75,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginBottom: 10,
  },
  menuIcon: {
    paddingHorizontal: 15,
    marginTop: 25,
  },
  searchIcon: {
    paddingHorizontal: 15,
    marginTop: 25,
  },
});
