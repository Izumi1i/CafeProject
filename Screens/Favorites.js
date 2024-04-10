import { StyleSheet, ScrollView, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import FavoritesCard from "../Components/FavoritesCard";
import FilterBar from "../Components/FilterBar";
import { useUser } from "../Context/UserContext";
import Header from "../Components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Favorites = () => {
  const { userData, products } = useUser();
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = () => {
      // Fetch user favorites from userData or AsyncStorage
      // Update userFavorites state
      // Example:
      const favorites = userData.favorites;
      const favoritesFiltered = products.filter(product => favorites.includes(product.id));
      setUserFavorites(favoritesFiltered);
    };

    fetchFavorites(); // Call the function once on mount

    // Remove interval if needed
    // return () => clearInterval(timerId);
  }, [userData, products]); // Add userData and products as dependencies

  return (
    <SafeAreaView>
      <Header title="Favorites" />
      <ScrollView>
        <View style={styles.container}>
          {userFavorites && userFavorites.length > 0 ? (
            userFavorites.map((product) => (
              <FavoritesCard
                key={product.id} // Remember to add key prop when mapping
                id={product.id}
                image={product.image}
                title={product.name}
                reviews={product.ratings}
                price={product.price}
              />
            ))
          ) : (
            <View style={styles.noFavoritesContainer}>
              <Text style={styles.noFavoritesText}>No favorites.</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingLeft: 5,
    marginTop: 10,
    gap: 10,
    paddingBottom: 100,
  },
  noFavoritesContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  noFavoritesText: {
    fontSize: 18,
    fontFamily: "poppinsSemiBold",
    textAlign: "center",
  },
});
