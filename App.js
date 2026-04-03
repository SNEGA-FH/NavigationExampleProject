import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import RootStack from './navigation/RootStack';
import { linking } from './navigation/linking';

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer linking={linking}>
                <StatusBar style="auto" />
                <RootStack />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
