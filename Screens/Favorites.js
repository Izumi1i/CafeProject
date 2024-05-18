import { StyleSheet, ScrollView, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import CoffeeCard from "../Components/CoffeeCard";
import { useUser } from "../Context/UserContext";
import Header from "../Components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Favorites = () => {
  const { userData, products } = useUser();
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = () => {
      if (userData && products) {
        const favorites = userData.favorites || [];
        const favoritesFiltered = products.filter(product => favorites.includes(product.id));
        setUserFavorites(favoritesFiltered);
      }
    };

    fetchFavorites();
  }, [userData, products]);

  return (
    <SafeAreaView>
      <Header title="Favorites" />
      <ScrollView>
        <View style={styles.container}>
          {userFavorites && userFavorites.length > 0 ? (
            userFavorites.map((product) => (
              <CoffeeCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.name}
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
    padding: 10,
  },
  noFavoritesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavoritesText: {
    fontSize: 18,
    fontFamily: "poppinsSemiBold",
    textAlign: "center",
  },
});
