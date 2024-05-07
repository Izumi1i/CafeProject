import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../Components/Header'; // Import the Header component
import CoffeeCard from '../Components/CoffeeCard';

const SearchScreen = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchAttempted, setSearchAttempted] = useState(false); // New state to track if search was performed
  const route = useRoute();
  const { products } = route.params;

  useEffect(() => {
    // Initialize filteredProducts state with an empty array
    setFilteredProducts([]);
  }, []);

  const Header = ({ title }) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    );
  };

  const handleOnChange = (text) => {
    setSearchInput(text);
    const filtered = products.filter(product => product.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredProducts(filtered);
    setSearchAttempted(true); // Set that search was attempted
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Search" />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Search products"
          value={searchInput}
          onChangeText={handleOnChange}
        />
      </View>
      <ScrollView>
        <View style={styles.productsContainer}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <CoffeeCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.name}
                reviews={product.ratings}
                price={product.price}
              />
            ))
          ) : searchAttempted && searchInput.length > 0 && ( // Only show no items message if search was attempted and input is not empty
            <View style={styles.noItemsAvailableContainer}>
              <Text style={styles.noItemsAvailableText}>No items available.</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 10,
  },
  textInput: {
    fontFamily: 'poppinsRegular',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 7,
    padding: 10,
    margin: 10,
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  noItemsAvailableContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsAvailableText: {
    fontFamily: 'poppinsLight',
    textAlign: 'center',
  },
  headerContainer: {
    height: 70, // Increased height for more padding space
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30, // Increased top padding to lower the title
    backgroundColor: '#967969', // Assuming the original color was white
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
