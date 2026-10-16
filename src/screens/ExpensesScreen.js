import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Gastos_Prueba = [
    { id: '1', descripcion: 'Supermercado', monto: 25000 },
    { id: '2', descripcion: 'Combustible', monto: 18000 },
    { id: '3', descripcion: 'Internet', monto: 32000 },
];

export default function ExpensesScreen(){
    const navigation = useNavigation();

    const vistaGastos = ({item}) =>(
        <View style={styles.itemContainer}>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
            <Text style={styles.monto}>${item.monto}</Text>
        </View>
    );
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Mis Gastos</Text>

            <FlatList
                data={Gastos_Prueba}
                keyExtractor={(item) => item.id}
                renderItem={vistaGastos}
                contentContainerStyle={styles.lista}
            />

            <View style={{ marginBottom: 15 }}>
                <Button 
                    title="+ Añadir Gasto" 
                    color="#8AB4F8"
                    onPress={() => navigation.navigate('NuevoGasto')} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 20,
        backgroundColor: '#0B0F14',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#F4F7FA',
        textAlign: 'center',
    },
    lista: {
        paddingBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#151B23',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#26313D',
    },
    descripcion: {
        fontSize: 16,
        color: '#F4F7FA',
        fontWeight: '500',
    },
    monto: {
        fontSize: 16,
        color: '#FF7B72',
        fontWeight: 'bold',
    },
});