import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Test from '../screens/Test';
import Test1 from '../screens/Test1';
import Add from '../screens/Add';
import History from '../screens/History'

const Stack = createStackNavigator()

const HomeContentNaviagtion = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="HomeContent"
                component={HomeScreen}
            />
            <Stack.Screen
                name="History"
                component={History}
            />
        </Stack.Navigator>
    )
}
export { HomeContentNaviagtion }

const TransactionContentNavigtion = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Transactions"
                component={Add}
            />
            <Stack.Screen
                name="Test"
                component={Test}
            />
        </Stack.Navigator>
    )
}
export { TransactionContentNavigtion }

const AnalyticsContentNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Analytics"
                component={Test1}
            />
            <Stack.Screen
                name="Test"
                component={Test}
            />
        </Stack.Navigator>
    )
}
export { AnalyticsContentNavigation }


