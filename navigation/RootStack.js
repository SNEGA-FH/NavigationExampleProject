import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_OPTIONS } from './ScreenOptions';
import TabNavigation from './TabNavigation';
import OrderNowScreen from '../screens/OrderNowScreen';
import BasketScreen from '../screens/BasketScreen';
import AllergyScreen from '../screens/AllergyScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

const Stack = createNativeStackNavigator();

/**
 * Root native stack: tabs + modal-style stack routes (blueprint-style RootStack).
 */
export default function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName={SCREEN_OPTIONS.MAIN_TABS.route_name}
            screenOptions={{
                headerShown: true
            }}>
            <Stack.Screen
                name={SCREEN_OPTIONS.MAIN_TABS.route_name}
                component={TabNavigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={SCREEN_OPTIONS.ORDER_NOW.route_name}
                component={OrderNowScreen}
                options={{ title: SCREEN_OPTIONS.ORDER_NOW.screen_title }}
            />
            <Stack.Screen
                name={SCREEN_OPTIONS.BASKET.route_name}
                component={BasketScreen}
                options={{ title: SCREEN_OPTIONS.BASKET.screen_title }}
            />
            <Stack.Screen
                name={SCREEN_OPTIONS.ALLERGY.route_name}
                component={AllergyScreen}
                options={{ title: SCREEN_OPTIONS.ALLERGY.screen_title }}
            />
            <Stack.Screen
                name={SCREEN_OPTIONS.NOT_FOUND.route_name}
                component={NotFoundScreen}
                options={{ title: SCREEN_OPTIONS.NOT_FOUND.screen_title }}
            />
        </Stack.Navigator>
    );
}
