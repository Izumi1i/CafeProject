import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const Buttons = (props) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
    console.log('pressed');
  };

  const handlePressOut = () => {
    setIsPressed(false);
    console.log('pressedout');
  };

  const variationOne = isPressed ? styles.variationOne : styles.container;
  const variationTwo = isPressed ? styles.variationTwo : styles.containerOutline;

  return (
    <Pressable
      onPress={props.onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={props.type ? variationTwo : variationOne}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D2B48C",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 5,
  },
  containerOutline: {
    borderColor: "#D2B48C",
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  variationOne: {
    backgroundColor: "rgba(255, 194, 15, 0.6)",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 5,
  },
  variationTwo: {
    backgroundColor: "rgba(255, 194, 15, 0.1)",
    borderWidth: 2,
    borderColor: "#FFC20F",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'poppinsSemiBold',
    fontSize: 15,
  }
});