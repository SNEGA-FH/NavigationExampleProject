import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { SCREEN_OPTIONS } from '../navigation/ScreenOptions';

export default function OrderHistoryTabScreen({ navigation }) {
    const go = (name) => navigation.navigate(name);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{SCREEN_OPTIONS.ORDER_HISTORY.screen_title}</Text>
            <Text style={styles.sub}>Tab · path: /orderHistory</Text>
            <Button title="Allergy info" onPress={() => go(SCREEN_OPTIONS.ALLERGY.route_name)} />
            <Button title="Open Not Found screen" onPress={() => go(SCREEN_OPTIONS.NOT_FOUND.route_name)} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 24, paddingBottom: 48, gap: 12 },
    title: { fontSize: 22, fontWeight: '600' },
    sub: { fontSize: 14, color: '#666', marginBottom: 8 }
});
