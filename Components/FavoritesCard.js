import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../Context/UserContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FavoritesCard = (props) => {
  const { userData, setUserData } = useUser();
  const navigation = useNavigation();
  const id = props.id;

  const handlePress = () => {
    navigation.navigate('CoffeeDetail', { id });
  };

  const handleDelete = () => {
    const newFavorites = userData.favorites.filter(favId => favId !== id);
    setUserData({ ...userData, favorites: newFavorites });
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={props.image} />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>
        <Pressable onPress={handleDelete}>
          <MaterialCommunityIcons name="delete-outline" size={24} color="white" />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default FavoritesCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#D2B48C',
    borderRadius: 7,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 7,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  titleText: {
    color: 'white',
    fontFamily: 'poppinsBold',
    fontSize: 17,
  },
});
