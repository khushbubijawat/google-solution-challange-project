import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import Ion from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../assets/mbm.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../assets/mbm.png"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/mbm.png"),
    backgroundColor: "#22bcb5",
  },
];

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const doneRenderHandler = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  const nextRenderHandler = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="md-arrow-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  return (
    <AppIntroSlider
      data={slides}
      renderDoneButton={doneRenderHandler}
      renderNextButton={nextRenderHandler}
      onDone={() => navigation.navigate("SignIn")}
      onSkip={() => navigation.navigate("SignIn")}
      skipLabel="Skip"
      showSkipButton={true}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              flex: 1,
              // backgroundColor: item.backgroundColor,
              alignItems: "center",
              justifyContent: "space-around",
              padding: 20,
            }}
          >
            <Text style={{ fontSize: 30 }}>{item.title}</Text>
            <Text style={{ fontSize: 20 }}>{item.text}</Text>
            <Image
              source={item.image}
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
            />
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
