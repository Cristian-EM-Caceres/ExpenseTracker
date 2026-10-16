import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ExpensesScreen from '../screens/ExpensesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#111820',
                borderTopColor: '#26313D',
            },
            tabBarActiveTintColor: '#8AB4F8',
            tabBarInactiveTintColor: '#98A6B5',
        }}
    >
    
    <Tab.Screen 
        name="Inicio" 
        component={HomeScreen} 
    />
    
    <Tab.Screen 
        name="ListaGastos" 
        component={ExpensesScreen} 
        options={{
            title: 'Mis Gastos',
        }}
    />
    </Tab.Navigator>
);
}