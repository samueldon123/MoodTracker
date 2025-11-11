import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { deleteMood, getAllMoods, updateMoods } from "../database/database";
import MoodCard from "../components/MoodCard";
import { useNavigation } from '@react-navigation/native';

export default function HistoryScreen() {
    const [ moods, setMoods ] = useState([]);
    const navigation = useNavigation();

    async function loadMoods() {
        const data = await getAllMoods();
        setMoods(data);
    }

    async function handleDelete(id) {
        await deleteMood(id);
        Alert.alert('Registro Excluido!');
        loadMoods();
    }

    async function handleEdit(id, mood) {
        navigation.navigate('EditMoodScreen', {
            mood,
            onSave: async (updatedMood) => {
                const { emoji, note } = updatedMood;
                await updateMoods(id, emoji, note);
                Alert.alert('Registro Atualizado!');
                await loadMoods(); // Certifique-se de recarregar os dados após a atualização
            },
        });
    }

    useEffect(() => {
        loadMoods();
    },[]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Histórico de Humor</Text>
            <FlatList
                data={moods}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MoodCard
                        mood={item}
                        OnDelete={() => handleDelete(item.id)}
                        onEdit={() => handleEdit(item.id, item)}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F2F2F2' },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#023047',
 },
});
