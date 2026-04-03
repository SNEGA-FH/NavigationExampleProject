import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { SCREEN_OPTIONS } from '../navigation/ScreenOptions';

export default function GroceryTabScreen({ navigation }) {
    const go = (name) => navigation.navigate(name);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{SCREEN_OPTIONS.GROCERY.screen_title}</Text>
            <Text style={styles.sub}>Tab · path: /grocery</Text>
            <Button title="Order Now" onPress={() => go(SCREEN_OPTIONS.ORDER_NOW.route_name)} />
            <Button title="Basket" onPress={() => go(SCREEN_OPTIONS.BASKET.route_name)} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 24, paddingBottom: 48, gap: 12 },
    title: { fontSize: 22, fontWeight: '600' },
    sub: { fontSize: 14, color: '#666', marginBottom: 8 }
});
