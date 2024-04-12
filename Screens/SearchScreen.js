import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import CoffeeCard from '../Components/CoffeeCard'

const SearchScreen = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setAllProducts(dummyProducts);
    setFilteredProducts(dummyProducts);
  }, []);

  const handleOnChange = (text) => {
    setSearchInput(text);
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <SafeAreaView>
      <Header title="Search" />
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Search products"
          value={searchInput}
          onChangeText={handleOnChange}
        />
      </View>
      <ScrollView>
        <View style={styles.productsContainer}>
          {filteredProducts.map((product) => (
            <CoffeeCard
              key={product.id}
              id={product.id}
              image={{ uri: product.image }}
              title={product.name}
              reviews={product.ratings}
              price={product.price}
            />
          ))}
          {filteredProducts.length === 0 && (
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
});