  import React from 'react';
  import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

  const CoffeeDetail = ({ route }) => {
    const { coffee } = route.params;

    const coffeeRecipes = {
      "Caffe Misto": {
        ingredients: ["Coffee", "Hot water", "Milk"],
        steps: [
          "Brew a strong cup of coffee.",
          "Heat the milk until it is warm but not boiling.",
          "Pour the brewed coffee into a cup.",
          "Add an equal amount of hot water.",
          "Pour the warm milk into the cup.",
          "Stir well and serve."
        ]
      },
      "Drip Coffee": {
        ingredients: ["Ground coffee", "Water"],
        steps: [
          "Measure the desired amount of ground coffee based on your taste preference.",
          "Bring water to a boil.",
          "Place a filter in the drip coffee maker.",
          "Add the ground coffee to the filter.",
          "Pour the boiling water over the coffee grounds.",
          "Allow the water to drip through the grounds into the pot below.",
          "Serve the freshly brewed drip coffee."
        ]
      },
      "Capuccino": {
        ingredients: ["Espresso", "Steamed milk", "Milk foam"],
        steps: [
          "Brew a shot of espresso.",
          "Steam the milk to create froth.",
          "Pour the steamed milk over the espresso.",
          "Spoon the milk foam on top.",
          "Serve immediately."
        ]
      },
      "Strawberry Crème Frappuccino": {
        ingredients: ["Strawberries", "Milk", "Vanilla syrup", "Whipped cream", "Ice"],
        steps: [
          "Combine strawberries, milk, vanilla syrup, and ice in a blender.",
          "Blend until smooth.",
          "Pour into a glass and top with whipped cream.",
          "Serve immediately."
        ]
      },
      "Americano": {
        ingredients: ["Espresso", "Hot water"],
        steps: [
          "Brew a shot of espresso.",
          "Pour hot water over the espresso shot.",
          "Serve immediately."
        ]
      },
      "Espresso Machiato": {
        ingredients: ["Espresso", "Milk foam"],
        steps: [
          "Brew a shot of espresso.",
          "Spoon milk foam on top of the espresso shot.",
          "Serve immediately."
        ]
      },
      "Espresso Creme": {
        ingredients: ["Espresso", "Whipped cream"],
        steps: [
          "Brew a shot of espresso.",
          "Top with whipped cream.",
          "Serve immediately."
        ]
      },
      "Iced Latte": {
        ingredients: ["Espresso", "Cold milk", "Ice", "Sweetener (optional)"],
        steps: [
          "Brew a shot of espresso.",
          "Pour over ice.",
          "Add cold milk.",
          "Sweeten to taste, if desired.",
          "Stir well and serve."
        ]
      },
      "Matcha Latte": {
        ingredients: ["Matcha powder", "Hot water", "Milk", "Sweetener (optional)"],
        steps: [
          "Whisk matcha powder with hot water until fully dissolved.",
          "Steam milk to desired temperature.",
          "Pour the matcha mixture into a cup.",
          "Add steamed milk.",
          "Sweeten to taste, if desired.",
          "Stir well and serve."
        ]
      },
      "Classic Latte": {
        ingredients: ["Espresso", "Steamed milk", "Milk foam"],
        steps: [
          "Brew a shot of espresso.",
          "Steam the milk until it is warm and frothy.",
          "Pour the espresso into a cup.",
          "Add steamed milk.",
          "Top with milk foam.",
          "Serve immediately."
        ]
      },
      "Banana Milk Coffee": {
        ingredients: ["Banana", "Milk", "Coffee", "Ice", "Sugar (optional)"],
        steps: [
          "Blend banana, milk, and coffee until smooth.",
          "Add ice and blend until desired consistency.",
          "Sweeten to taste, if desired.",
          "Serve immediately."
        ]
      },
      "Creamy Ice Coffee": {
        ingredients: ["Coffee", "Milk", "Ice cream", "Ice", "Sugar (optional)"],
        steps: [
          "Brew a strong cup of coffee.",
          "Let it cool to room temperature.",
          "Blend coffee, milk, ice cream, and ice until smooth.",
          "Sweeten to taste, if desired.",
          "Serve immediately."
        ]
      },
      "Mocha Smoothie": {
        ingredients: ["Banana", "Milk", "Cocoa powder", "Coffee", "Ice", "Sugar (optional)"],
        steps: [
          "Blend banana, milk, cocoa powder, coffee, and ice until smooth.",
          "Sweeten to taste, if desired.",
          "Serve immediately."
        ]
      },
      "Mocha Frappe": {
        ingredients: ["Coffee", "Milk", "Chocolate syrup", "Whipped cream", "Ice"],
        steps: [
          "Brew a strong cup of coffee.",
          "Let it cool to room temperature.",
          "Blend coffee, milk, chocolate syrup, and ice until smooth.",
          "Top with whipped cream.",
          "Serve immediately."
        ]
      },
      "Java Chip Frappe": {
        ingredients: ["Coffee", "Milk", "Chocolate chips", "Chocolate syrup", "Whipped cream", "Ice"],
        steps: [
          "Brew a strong cup of coffee.",
          "Let it cool to room temperature.",
          "Blend coffee, milk, chocolate chips, chocolate syrup, and ice until smooth.",
          "Top with whipped cream.",
          "Serve immediately."
        ]
      },
      "Dark Chocolate Frappe": {
        ingredients: ["Coffee", "Milk", "Dark chocolate", "Chocolate syrup", "Whipped cream", "Ice"],
        steps: [
          "Brew a strong cup of coffee.",
          "Let it cool to room temperature.",
          "Blend coffee, milk, dark chocolate, chocolate syrup, and ice until smooth.",
          "Top with whipped cream.",
          "Serve immediately."
        ]
      },
      "Mocha Cappuccino": {
        ingredients: ["Espresso", "Chocolate syrup", "Steamed milk", "Milk foam"],
        steps: [
          "Brew a shot of espresso.",
          "Stir in chocolate syrup.",
          "Steam the milk until it is warm and frothy.",
          "Pour the espresso into a cup.",
          "Add steamed milk.",
          "Top with milk foam.",
          "Serve immediately."
        ]
      },
      "Caramel Cappuccino": {
        ingredients: ["Espresso", "Caramel syrup", "Steamed milk", "Milk foam"],
        steps: [
          "Brew a shot of espresso.",
          "Stir in caramel syrup.",
          "Steam the milk until it is warm and frothy.",
          "Pour the espresso into a cup.",
          "Add steamed milk.",
          "Top with milk foam.",
          "Serve immediately."
        ]
      },
    };

    const recipe = coffeeRecipes[coffee.name];

    if (!recipe) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>Recipe not found for {coffee.name}</Text>
        </View>
      );
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* Image of the coffee */}
        <View style={styles.imageContainer}>
          <Image source={coffee.image} style={styles.coffeeImage} />
          <Text style={styles.coffeeName}>{coffee.name}</Text>
        </View>

        {/* Ingredients */}
        <View style={[styles.sectionContainer, styles.ingredientsContainer]}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.item}>{ingredient}</Text>
            </View>
          ))}
        </View>

        {/* Steps */}
        <View style={[styles.sectionContainer, styles.stepsContainer]}>
          <Text style={styles.sectionTitle}>Steps</Text>
          {recipe.steps.map((step, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.stepNumber}>{index + 1}.</Text>
              <Text style={styles.item}>{step}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 25, 
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    coffeeImage: {
      aspectRatio: 1.5,
      width: '100%',
      height: 300,
      marginBottom: 20,
      borderRadius: 10,
    },
    coffeeName: {
      fontSize: 24,
      fontFamily: 'poppinsBold',
      marginTop: 10,
    },
    sectionContainer: {
      marginBottom: 20,
      paddingVertical: 15, 
      paddingHorizontal: 15, 
      borderColor: '#000',
      borderWidth: 1, 
      padding: 15,
      borderRadius: 10,
    },
    sectionTitle: {
      fontSize: 20,
      fontFamily: 'poppinsBold',
      marginBottom: 10,
      color: '#fff',
    },
    ingredientsContainer: {
      backgroundColor: '#D2B48C',
    },
    stepsContainer: {
      backgroundColor: '#D2B48C',
    },
    listItem: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    bullet: {
      fontFamily: 'poppinsLight',
      fontSize: 16,
      marginRight: 5,
    },
    step: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    stepNumber: {
      fontSize: 16,
      fontFamily: 'poppinsLight',
      marginRight: 5,
      marginBottom: 5,
    },
    item: {
      flex: 1,
      fontSize: 16,
      marginBottom: 5,
      color: '#000',
      fontFamily: 'poppinsLight',
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorMessage: {
      fontSize: 20,
      color: 'red',
    },
  });

  export default CoffeeDetail;