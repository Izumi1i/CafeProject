import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CoffeeCardSpan = ({ onPress, image, title, price }) => {
  const [pressed, setPressed] = useState(false);

  const handleAddToFavorites = () => {
    console.log('Added to favorites');
    setPressed(!pressed);
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionBox}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.priceText}>{price}</Text>
          </View>
          <Pressable onPress={handleAddToFavorites}>
            {pressed ? (
              <MaterialCommunityIcons name="bookmark" size={24} color="black" />
            ) : (
              <MaterialCommunityIcons name="bookmark-outline" size={24} color="black" />
            )}
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default CoffeeCardSpan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxHeight: 300,
    maxWidth: 190,
    borderRadius: 7,
    margin: 4,
    backgroundColor: 'white', // Ensure background contrasts for better visibility
  },
  descriptionBox: {
    flexDirection: 'column',
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D2B48C',
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
  image: {
    width: 190,
    height: 220,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    resizeMode: 'cover', // Ensure the image covers the designated area properly
  },
  titleText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'poppinsBold',
    maxWidth: 140,
  },
  priceText: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'poppinsLight',
  },
});
