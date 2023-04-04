import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Main() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Navigate to all Screens</Text>
      <View style={styles.button}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Welcome"
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="SignIn"
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="SignUp"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    // padding: 10,
  },
});
