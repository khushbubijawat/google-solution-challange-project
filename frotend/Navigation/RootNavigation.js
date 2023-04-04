import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import WelcomeScreen from "../screens/WelcomeScreen";
import BottomNavigation from "./BottomNavigation";

const Stack = createNativeStackNavigator();


function RootNavigation() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="Main" component={Main} /> */}
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{
                            headerShown: false,
                            headerBackVisible: false,
                            title: "Sign In",
                        }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Home" component={BottomNavigation} options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default RootNavigation;