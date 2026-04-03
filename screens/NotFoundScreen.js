import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SCREEN_OPTIONS } from '../navigation/ScreenOptions';

export default function NotFoundScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{SCREEN_OPTIONS.NOT_FOUND.screen_title}</Text>
            <Text style={styles.sub}>No matching route (linking catch-all: *)</Text>
            <Button title="Go to Home tab" onPress={() => navigation.navigate(SCREEN_OPTIONS.MAIN_TABS.route_name)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, justifyContent: 'center', gap: 12 },
    title: { fontSize: 22, fontWeight: '600' },
    sub: { fontSize: 14, color: '#666', marginBottom: 8 }
});
