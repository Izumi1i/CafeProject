import { StyleSheet, Text, ScrollView, View, Image, TextInput, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CoffeeCard from '../Components/CoffeeCard';
import Header from '../Components/Header';

const profilePhoto = require('../assets/userPhoto.png');

const CoffeeDetails = ({ route }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [sellerName, setSellerName] = useState('');
  const [sellerImage, setSellerImage] = useState('');
  const productId = route.params.id;

  // Dummy data for demonstration
  const dummyProductDetails = {
    id: productId,
    sellerId: 'seller123',
    name: 'Caffe Misto',
    image: require('../assets/CaffeeMisto.jpg'),
    ratings: 4.5,
    /*price: 120,*/
    description: 'Description of the coffee...',
    views: 100,
    favoritesCount: 50,
    timestamp: '2024-03-02 10:30:00',
  };

  useEffect(() => {
    // Simulating fetching product details
    setProductDetails(dummyProductDetails);
  }, [productId]);

  useEffect(() => {
    // Simulating fetching seller details
    setSellerName('Seller Name');
    setSellerImage(profilePhoto);
  }, []);

  return (
    <SafeAreaView>
      <Header title="Details" />
      <ScrollView>
        <View style={styles.productDetailsContainer}>
          {productDetails && (
            <Details
              productId={productDetails.id}
              userImage={sellerImage}
              userName={sellerName}
              productImage={productDetails.image}
              reviews={productDetails.ratings}
              price={productDetails.price}
              coffeeTitle={productDetails.name}
              productDescription={productDetails.description}
              views={productDetails.views}
              favoritesCount={productDetails.favoritesCount}
              timestamp={productDetails.timestamp}
            />
          )}
          <CommentSection id={productId} />
          <MoreCoffees />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoffeeDetails;

const MoreCoffees = () => {
  // Dummy data for demonstration
  const dummyProducts = [
    {
      id: 'coffee1',
      image: require('../assets/CaffeeMisto.jpg'),
      name: 'Caffe Misto',
      ratings: 4.5,
      /*price: 120,*/
    },
    {
      id: 'coffee2',
      image: require('../assets/Drip_Coffee.jpg'),
      name: 'Drip Coffee',
      ratings: 4.2,
      /*price: 120,*/
    },
  ];

  return (
    <View style={styles.moreCoffeesContainer}>
      <Text style={styles.moreCoffeesText}>Other coffees</Text>
      <ScrollView horizontal={true}>
        <View style={styles.coffeeCards}>
          {dummyProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.name}
              reviews={product.ratings}
              price={product.price}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const CommentSection = ({ id }) => {
  const [comment, setComment] = useState('');
  const [commentsData, setCommentsData] = useState([]);

  // Dummy data for demonstration
  const dummyComments = [
    { id: 'comment1', description: 'Great coffee!', username: 'user1', formattedTimestamp: '2024-03-02 10:45:00' },
    { id: 'comment2', description: 'Love it!', username: 'user2', formattedTimestamp: '2024-03-02 11:00:00' },
  ];

  useEffect(() => {
    // Simulating fetching comments
    setCommentsData(dummyComments);
  }, []);

  const handleAddComment = () => {
    // Implement adding comment logic
    console.log('Adding comment:', comment);
    setComment('');
  };

  return (
    <View style={styles.commentContainer}>
      <Text style={styles.commentTitle}>Comments</Text>
      <View style={styles.comments}>
        {commentsData.map((comment) => (
          <View key={comment.id} style={styles.comment}>
            <Text>{comment.description}</Text>
            <View style={styles.commentFooter}>
              <Text>{comment.username}</Text>
              <Text>{comment.formattedTimestamp}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.commentInputContainer}>
        <TextInput
          value={comment}
          onChangeText={setComment}
          style={styles.commentInput}
          placeholder="Add a comment"
          placeholderTextColor="grey"
        />
        <Pressable onPress={handleAddComment}>
          <MaterialCommunityIcons name="send" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const Details = (props) => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.sellerInfo}>
        <Image style={styles.userImage} source={props.userImage} />
        <View>
          <Text style={styles.userName}>{props.userName}</Text>
          <Text style={styles.timestamp}>{props.timestamp}</Text>
        </View>
      </View>
      <Image style={styles.productImage} source={{ uri: props.productImage }} />
      <Text style={styles.title}>{props.coffeeTitle}</Text>
      <View style={styles.stats}>
        <Text>{props.reviews} Reviews</Text>
        <Text>${props.price}</Text>
        <Text>{props.views} Views</Text>
        <Text>{props.favoritesCount} Favorites</Text>
      </View>
      {/* Implement favorite button here */}
      <Text>Description:</Text>
      <Text>{props.productDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles
});
