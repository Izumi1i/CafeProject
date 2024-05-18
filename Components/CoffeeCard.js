import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../Context/UserContext';

const CoffeeCard = ({ id, image, title }) => {
  const { userData, setUserData } = useUser();
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(userData.favorites.includes(id));

  useEffect(() => {
    setPressed(userData.favorites.includes(id));
  }, [userData.favorites, id]);

  const handlePress = () => {
    navigation.navigate('CoffeeDetail', { id });
  };

  const handleFavoritePress = () => {
    const newFavorites = pressed
      ? userData.favorites.filter(favId => favId !== id)
      : [...userData.favorites, id];

    setUserData({ ...userData, favorites: newFavorites });
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionBox}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <Pressable onPress={handleFavoritePress}>
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
});
