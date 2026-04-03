import * as Linking from 'expo-linking';
import { getStateFromPath as getStateFromPathDefault } from '@react-navigation/native';
import { SCREEN_OPTIONS } from './ScreenOptions';

const { HOME, GROCERY, ORDER_HISTORY, ORDER_NOW, BASKET, ALLERGY, NOT_FOUND } = SCREEN_OPTIONS;

/**
 * Expo Go dev URLs look like: exp://10.0.2.2:8081/--/order-now
 * React Navigation strips the host but leaves "/--/order-now", which does NOT match path "order-now".
 * Normalize before delegating to the default parser.
 */
function normalizeExpoGoPath(path) {
    if (path == null || typeof path !== 'string') return path;
    return path.replace(/^\/--\//, '/').replace(/^--\//, '/');
}

/**
 * Deep linking config for web + native (mirrors your router config pattern).
 * Paths: / , /grocery , /orderHistory , /order-now , /basket , /allergy , * → 404
 */
export const linking = {
    prefixes: [
        Linking.createURL('/'),
        // Android emulator → host machine Metro (must match adb deep link host)
        'exp://10.0.2.2:8081',
        'exp://127.0.0.1:8081',
        // Tunnel / exp.host / exp.direct (use the exact host shown in `npx expo start`)
        // Dev web (Expo may use different ports)
        'http://localhost:8081',
        'http://localhost:19006',
        'http://127.0.0.1:8081',
        'myapp://'
    ],
    getStateFromPath(path, config) {
        return getStateFromPathDefault(normalizeExpoGoPath(path), config);
    },
    config: {
        screens: {
            [SCREEN_OPTIONS.MAIN_TABS.route_name]: {
                path: '',
                screens: {
                    [HOME.route_name]: '',
                    [GROCERY.route_name]: 'grocery',
                    [ORDER_HISTORY.route_name]: 'orderHistory'
                }
            },
            [ORDER_NOW.route_name]: 'order-now',
            [BASKET.route_name]: 'basket',
            [ALLERGY.route_name]: 'allergy',
            [NOT_FOUND.route_name]: '*'
        }
    }
};
