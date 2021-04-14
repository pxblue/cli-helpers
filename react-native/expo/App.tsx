import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider as ThemeProvider } from 'react-native-paper';
import * as PXBThemes from '@pxblue/react-native-themes';
import AppLoading from 'expo-app-loading';

export default function App() {
    const [fontsLoaded] = useFonts({
        'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
        'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
        'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
        'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <ThemeProvider theme={PXBThemes.blue}>
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
