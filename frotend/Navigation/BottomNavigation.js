import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { User, House, ChartBar, UserCircle,Plus } from 'phosphor-react-native';



import { HomeContentNaviagtion, TransactionContentNavigtion, AnalyticsContentNavigation } from './CustomNavigation'

//screen Name

const homeContent = "Home";
const transactions = "Transactions";
const analytics = "Analytics"
const account = "Account";


const Tab = createBottomTabNavigator();
function BottomNavigation() {
    return (
        <>
            <Tab.Navigator
                initialRouteName='homeContent'
                tabBarOptions={{
                    activeTintColor: 'black',
                }}>
                <Tab.Screen
                    name={homeContent}
                    component={HomeContentNaviagtion}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size, focused }) => (
                            focused ? <House size={32} weight="fill" /> : <House size={32} />
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name={transactions}
                    component={TransactionContentNavigtion}
                    options={{
                        tabBarLabel: 'Add',
                        tabBarIcon: ({focused }) => (
                            focused ? <Plus size={32} weight="fill" /> : <Plus size={32} />
                        ),
                        headerShown: false
                    }}
                />
                {/* <Tab.Screen
                    name={analytics}
                    component={AnalyticsContentNavigation}
                    options={{
                        tabBarLabel: 'Analytics',
                        tabBarIcon: ({ color, size, focused }) => (
                            focused ? <ChartBar size={32} weight="fill" /> : <ChartBar size={32} />

                        ),
                        headerShown: false
                    }}
                /> */}
            </Tab.Navigator>
        </>
    )
}

export default BottomNavigation;




