import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FilterBar = ({ onSearchPress }) => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    // Assuming 'onSearchPress' returns the products data
    const products = onSearchPress();
    navigation.navigate('SearchScreen', { products });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleSearchPress} style={styles.searchIcon}>
        <FontAwesome name="search" size={20} color="black" />
      </Pressable>
    </View>
  );
};

export default FilterBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2B48C',
    flexDirection: 'row',
    height: 75,
    alignItems: 'center',
    justifyContent: 'flex-end',  
    paddingHorizontal: 15,  
    paddingVertical: 5,
    marginBottom: 10,
  },
  searchIcon: {
    paddingHorizontal: 15,  
    marginTop: 25,  
  },
});
