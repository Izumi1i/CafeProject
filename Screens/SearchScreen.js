import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { useUser } from '../Context/UserContext';
import CoffeeCard from '../Components/CoffeeCard';

const SearchScreen = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchAttempted, setSearchAttempted] = useState(false);
  const { products } = useUser();

  const handleOnChange = (text) => {
    setSearchInput(text);
    const filtered = products.filter(product => product.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredProducts(filtered);
    setSearchAttempted(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>
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
              />
            ))
          ) : searchAttempted && searchInput.length > 0 && (
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
  headerContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#967969',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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
});
