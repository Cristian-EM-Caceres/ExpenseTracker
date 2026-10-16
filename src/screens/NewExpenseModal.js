import {View, Button,  TextInput, Alert, StyleSheet} from 'react-native';

export default function NewExpenseModal() {
    const HandleGuardar = () => {
        Alert.alert("Gasto guardado", "El gasto ha sido guardado exitosamente.");
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder="Ingrese el nombre del gasto"
                placeholderTextColor="#98A6B5"
                keyboardType="default"
            />
            <TextInput style={styles.input}
                placeholder="Ingrese el monto del gasto"
                placeholderTextColor="#98A6B5"
                keyboardType="numeric"
            />

            <TextInput style={styles.input}
                placeholder="Ingrese la Categoría del gasto"
                placeholderTextColor="#98A6B5"
                keyboardType="default"
            />
            <Button 
                title="Guardar Gasto"
                color="#8AB4F8"
                onPress={HandleGuardar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: '#344252',
        padding: 20,
        borderRadius: 20,
        marginBottom: 15,
        paddingHorizontal: 16,
        backgroundColor: '#151B23',
        color: '#F4F7FA',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20, 
        backgroundColor: '#0B0F14',
    }
});