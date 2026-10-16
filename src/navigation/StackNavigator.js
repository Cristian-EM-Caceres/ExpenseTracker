import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import NewExpenseModal from '../screens/NewExpenseModal';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: '#0B0F14' },
            headerTintColor: '#F4F7FA',
            headerTitleStyle: { color: '#F4F7FA' },
            contentStyle: { backgroundColor: '#0B0F14' },
        }}
    >
    
    <Stack.Screen 
        name="MainTabs" 
        component={TabNavigator} 
        options={{ headerShown: false }} 
    />
    
    <Stack.Screen 
        name="NuevoGasto" 
        component={NewExpenseModal} 
        options={{ 
            title: 'Agregar Nuevo Gasto',
        }} 
    />

    </Stack.Navigator>
);
}