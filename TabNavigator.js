import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './Signup';
import Home from './Home';
import Analytics from './Analytics';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

  return (
<NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // console.log(color + "" + size + ""+focused);

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline'; 
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name='Signup' component={Signup} options={{ tabBarBadge: 1 }}/>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Analytics' component={Analytics} options={{ tabBarBadge: 3 }}/>
        </Tab.Navigator>
        </NavigationContainer>
  )
}

export default TabNavigator