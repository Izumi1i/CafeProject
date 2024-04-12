import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CoffeeCard = (props) => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    // Handle card press action here
    console.log('Card pressed');
  };

  const handleAddToFavorites = () => {
    // Handle add to favorites action here
    console.log('Added to favorites');
    setPressed(!pressed);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: props.image }} />
        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionBox}>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.priceText}>₱{props.price}</Text>
          </View>
          <Pressable onPress={handleAddToFavorites}>
            {pressed ? (
              <MaterialCommunityIcons name="bookmark" size={24} color="white" />
            ) : (
              <MaterialCommunityIcons name="bookmark-outline" size={24} color="white" />
            )}
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default CoffeeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxHeight: 300,
    maxWidth: 190,
    borderRadius: 7,
    margin: 4,
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
    maxWidth: 200,
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 5,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
  image: {
    width: 190,
    height: 220,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  titleText: {
    color: 'white',
    fontSize: 17,
    maxWidth: 140,
    fontFamily: 'poppinsBold',
  },
  priceText: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'poppinsLight',
  },
});
