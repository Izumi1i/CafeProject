import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import CoffeeCardSpan from "../Components/CoffeeCardSpan";
import FilterBar from "../Components/FilterBar";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [allProducts, setAllProducts] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);
  const [mostViewedProducts, setMostViewedProducts] = useState([]);
  const [espressoProducts, setEspressoProducts] = useState([]);
  const [latteProducts, setLatteProducts] = useState([]);
  const [icedCoffeeProducts, setIcedCoffeeProducts] = useState([]);
  const [frappeProducts, setFrappeProducts] = useState([]);
  const [cappuccinoProducts, setCappuccinoProducts] = useState([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        image: require('../assets/CaffeMisto.jpg'),
        name: "Caffe Misto",
        createdAt: new Date(),
      },
      {
        id: 2,
        image: require('../assets/Drip_Coffee.jpg'),
        name: "Drip Coffee",
        createdAt: new Date(),
      },
      {
        id: 3,
        image: require('../assets/Capuccino.jpg'),
        name: "Capuccino",
        createdAt: new Date(),
      },
      {
        id: 4,
        image: require('../assets/StrawberryCremeFrappucino.jpg'),
        name: "Strawberry Crème Frappuccino",
        createdAt: new Date(),
      },
      {
        id: 5,
        image: require('../assets/Americano.jpg'),
        name: "Americano",
        createdAt: new Date(),
      },
      {
        id: 6,
        image: require('../assets/EspressoMachiato.jpg'),
        name: "Espresso Machiato",
        createdAt: new Date(),
      },
      {
        id: 7,
        image: require('../assets/EspressoCreme.jpg'),
        name: "Espresso Creme",
        createdAt: new Date(),
      },
      {
        id: 8,
        image: require('../assets/IcedLatte.jpg'),
        name: "Iced Latte",
        createdAt: new Date(),
      },
      {
        id: 9,
        image: require('../assets/MatchaLatte.jpg'),
        name: "Matcha Latte",
        createdAt: new Date(),
      },
      {
        id: 10,
        image: require('../assets/ClassicLatte.jpg'),
        name: "Classic Latte",
        createdAt: new Date(),
      },
      {
        id: 11,
        image: require('../assets/BananaMilkCoffee.jpg'),
        name: "Banana Milk Coffee",
        createdAt: new Date(),
      },
      {
        id: 12,
        image: require('../assets/CreamyIceCoffee.jpg'),
        name: "Creamy Ice Coffee",
        createdAt: new Date(),
      },
      {
        id: 13,
        image: require('../assets/MochaSmoothie.png'),
        name: "Mocha Smoothie",
        createdAt: new Date(),
      },
      {
        id: 14,
        image: require('../assets/MochaFrappe.jpg'),
        name: "Mocha Frappe",
        createdAt: new Date(),
      },
      {
        id: 15,
        image: require('../assets/JavaChipFrappe.jpg'),
        name: "Java Chip Frappe",
        createdAt: new Date(),
      },
      {
        id: 16,
        image: require('../assets/DarkChocolateFrappe.jpg'),
        name: "Dark Chocolate Frappe",
        createdAt: new Date(),
      },
      {
        id: 17,
        image: require('../assets/MochaCappucino.jpg'),
        name: "Mocha Cappuccino",
        createdAt: new Date(),
      },
      {
        id: 18,
        image: require('../assets/CaramelCappucino.jpg'),
        name: "Caramel Cappuccino",
        createdAt: new Date(),
      },
    ];

    setAllProducts(products);

    const mostViewedNames = ["Capuccino", "Strawberry Crème Frappuccino"];
    const filteredMostViewedProducts = products.filter(product => mostViewedNames.includes(product.name));
    setMostViewedProducts(filteredMostViewedProducts);

    const recentNames = ["Caffe Misto", "Drip Coffee"];
    const filteredRecentProducts = products.filter(product => recentNames.includes(product.name));
    setRecentProducts(filteredRecentProducts);

    const espressoNames = ["Americano", "Espresso Machiato", "Espresso Creme"];
    const filteredEspressoProducts = products.filter(product => espressoNames.includes(product.name));
    setEspressoProducts(filteredEspressoProducts);

    const latteNames = ["Iced Latte", "Matcha Latte", "Classic Latte"];
    const filteredLatteProducts = products.filter(product => latteNames.includes(product.name));
    setLatteProducts(filteredLatteProducts);

    const icedCoffeeNames = ["Banana Milk Coffee", "Creamy Ice Coffee", "Mocha Smoothie"];
    const filteredIcedCoffeeProducts = products.filter(product => icedCoffeeNames.includes(product.name));
    setIcedCoffeeProducts(filteredIcedCoffeeProducts);

    const frappeNames = ["Mocha Frappe", "Java Chip Frappe", "Dark Chocolate Frappe"];
    const filteredFrappeProducts = products.filter(product => frappeNames.includes(product.name));
    setFrappeProducts(filteredFrappeProducts);

    const cappuccinoNames = ["Capuccino", "Mocha Cappuccino", "Caramel Cappuccino"];
    const filteredCappuccinoProducts = products.filter(product => cappuccinoNames.includes(product.name));
    setCappuccinoProducts(filteredCappuccinoProducts);

  }, []);

  const handleCoffeeClick = (coffee) => {
    navigation.navigate('CoffeeDetail', { coffee });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FilterBar />
      <ScrollView>
        {/* Most Viewed Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Most Viewed</Text>
          <ScrollView horizontal={true} style={styles.scrollContainer}>
            <View style={styles.container}>
              {mostViewedProducts.map((product) => (
                <CoffeeCardSpan
                  key={product.id}
                  image={product.image}
                  title={product.name}
                  reviews={product.ratings}
                  price={product.price}
                  onPress={() => handleCoffeeClick(product)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Recent Products Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Newest Coffee</Text>
          <ScrollView horizontal={true} style={styles.scrollContainer}>
            <View style={styles.container}>
              {recentProducts.map((product) => (
                <CoffeeCardSpan
                  key={product.id}
                  image={product.image}
                  title={product.name}
                  reviews={product.ratings}
                  price={product.price}
                  onPress={() => handleCoffeeClick(product)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Espresso Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Espresso</Text>
          <ScrollView horizontal={true} style={styles.scrollContainer}>
            <View style={styles.container}>
              {espressoProducts.map((product) => (
                <CoffeeCardSpan
                  key={product.id}
                  image={product.image}
                  title={product.name}
                  reviews={product.ratings}
                  price={product.price}
                  onPress={() => handleCoffeeClick(product)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Latte Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Latte</Text>
          <ScrollView horizontal={true} style={styles.scrollContainer}>
            <View style={styles.container}>
              {latteProducts.map((product) => (
                <CoffeeCardSpan
                  key={product.id}
                  image={product.image}
                  title={product.name}
                  reviews={product.ratings}
                  price={product.price}
                  onPress={() => handleCoffeeClick(product)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Iced Coffee Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Iced Coffee</Text>
          <ScrollView horizontal={true} style={styles.scrollContainer}>
            <View style={styles.container}>
              {icedCoffeeProducts.map((product) => (
                <CoffeeCardSpan
                  key={product.id}
                  image={product.image}
                  title={product.name}
                  reviews={product.ratings}
                  price={product.price}
                  onPress={() => handleCoffeeClick(product)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Frappe Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Frappe</Text>
          <ScrollView horizontal={true} style={styles.scrollContainer}>
            <View style={styles.container}>
              {frappeProducts.map((product) => (
                <CoffeeCardSpan
                  key={product.id}
                  image={product.image}
                  title={product.name}
                  reviews={product.ratings}
                  price={product.price}
                  onPress={() => handleCoffeeClick(product)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Cappuccino Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Cappuccino</Text>
          <ScrollView horizontal={true} style={[styles.scrollContainer, {height: 375}]}>
            <View style={styles.container}>
              {cappuccinoProducts.map((product) => (
                <CoffeeCardSpan
                  key={product.id}
                  image={product.image}
                  title={product.name}
                  reviews={product.ratings}
                  price={product.price}
                  onPress={() => handleCoffeeClick(product)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  noItemsAvailableContainer: {
    padding: 10,
  },
  noItemsAvailableText: {
    fontFamily: 'poppinsLight',
    textAlign: 'center',
  },
  moreFoodsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  mainContainer: {
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scrollContainer: {
  },
  sectionTitle: {
    fontSize: 23,
    paddingHorizontal: 10,
    fontFamily: 'poppinsBold',
  },
  sectionContainer: {
    backgroundColor: 'white',
    marginVertical: 10, 
    paddingVertical: 10,
  },
  lastSectionContainer: {
    backgroundColor: 'white',
    marginVertical: 10, 
    paddingVertical: 10,
    marginBottom: 100,
  }
});
