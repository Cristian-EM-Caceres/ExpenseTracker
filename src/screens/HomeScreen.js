import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Expense Tracker</Text>
            <Text style={styles.subtitle}>¡Te damos la bienvenida!</Text>
            <Text style={styles.description}>
               Bienvenido/a. Esta es la mejor aplicación para que puedas hacer gestión de tus gastos de una manera eficiente.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#0B0F14',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#F4F7FA',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#C5D0DC',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#98A6B5',
    },
});
