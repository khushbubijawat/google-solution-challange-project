import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Label({ children }) {
  return (
    <View>
      <Text style={styles.label}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
  },
});
