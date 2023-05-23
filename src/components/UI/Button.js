import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, mode === "flat" && styles.flat]}
      >
        <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderColor: "white",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
});

export default Button;
