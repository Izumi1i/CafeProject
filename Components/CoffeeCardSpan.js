import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CoffeeCardSpan = (props) => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    console.log('Card pressed');
  };

  const handleAddToFavorites = () => {
    console.log('Added to favorites');
    setPressed(!pressed);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Image style={styles.image} source={props.image} />
        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionBox}>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.priceText}>{props.price}</Text>
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
  },
  descriptionBox: {
    flexDirection: 'column',
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ECBC24',
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
    color: 'black',
    fontSize: 17,
    maxWidth: 140,
    fontFamily: 'poppinsBold',
  },
  priceText: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'poppinsLight',
  },
});
