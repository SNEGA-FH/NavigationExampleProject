import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN_OPTIONS } from './ScreenOptions';
import HomeTabScreen from '../screens/HomeTabScreen';
import GroceryTabScreen from '../screens/GroceryTabScreen';
import OrderHistoryTabScreen from '../screens/OrderHistoryTabScreen';

const Tab = createBottomTabNavigator();

/**
 * Bottom tabs: Home, Grocery, Order History (blueprint-style TabNavigation).
 */
export default function TabNavigation() {
    return (
        <Tab.Navigator
            initialRouteName={SCREEN_OPTIONS.HOME.route_name}
            screenOptions={{
                headerShown: true,
                tabBarLabelStyle: { fontSize: 12 }
            }}>
            <Tab.Screen
                name={SCREEN_OPTIONS.HOME.route_name}
                component={HomeTabScreen}
                options={{ title: SCREEN_OPTIONS.HOME.screen_title, tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name={SCREEN_OPTIONS.GROCERY.route_name}
                component={GroceryTabScreen}
                options={{ title: SCREEN_OPTIONS.GROCERY.screen_title, tabBarLabel: 'Grocery' }}
            />
            <Tab.Screen
                name={SCREEN_OPTIONS.ORDER_HISTORY.route_name}
                component={OrderHistoryTabScreen}
                options={{ title: SCREEN_OPTIONS.ORDER_HISTORY.screen_title, tabBarLabel: 'Orders' }}
            />
        </Tab.Navigator>
    );
}
