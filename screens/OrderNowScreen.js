import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SCREEN_OPTIONS } from '../navigation/ScreenOptions';

export default function OrderNowScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{SCREEN_OPTIONS.ORDER_NOW.screen_title}</Text>
            <Text style={styles.sub}>Stack screen · path: /order-now</Text>
            <Button title="Go to Basket" onPress={() => navigation.navigate(SCREEN_OPTIONS.BASKET.route_name)} />
            <Button title="Go to Allergy" onPress={() => navigation.navigate(SCREEN_OPTIONS.ALLERGY.route_name)} />
            <Button title="Back to tabs" onPress={() => navigation.navigate(SCREEN_OPTIONS.MAIN_TABS.route_name)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, justifyContent: 'center', gap: 12 },
    title: { fontSize: 22, fontWeight: '600' },
    sub: { fontSize: 14, color: '#666', marginBottom: 8 }
});
