import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../Context/UserContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FavoritesCard = (props) => {
  const { userData } = useUser();
  const navigation = useNavigation();
  const id = props.id;

  const handlePress = () => {
    navigation.navigate('CoffeeDetail', { id });
  };

  const handleDelete = async (userId, favoriteId) => {
    try {
      // Your delete logic goes here
      console.log('Favorite deleted successfully');
    } catch (error) {
      console.error('Error deleting favorite: ', error);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.descriptionBox}>
        <View style={styles.rightSide}>
          <Image style={styles.image} source={{ uri: props.image }} />
          <View>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.priceText}>₱{props.price}</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Pressable onPress={() => handleDelete(userData.id, id)}>
            <MaterialCommunityIcons name="delete-outline" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default FavoritesCard;

const styles = StyleSheet.create({
  rightSide: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
  descriptionBox: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    height: 120,
    backgroundColor: '#ECBC24',
    borderRadius: 7,
    width: 400,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 7,
  },
  titleText: {
    color: 'white',
    fontFamily: 'poppinsBold',
    fontSize: 17,
    width: 210,
  },
  priceText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'poppinsBold',
  },
});
