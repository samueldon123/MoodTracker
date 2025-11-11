import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import EmojiPicker from '../componentes/emojiPicker';

export default function EditMoodScreen({ route, navigation }) {
    const { mood, onSave } = route.params;
    const [emoji, setEmoji] = useState(mood.emoji); // Novo estado para o emoji
    const [note, setNote] = useState(mood.note);

    console.log('Valor inicial do emoji:', mood.emoji); // Log para depuração

    function handleSave() {
        onSave({ emoji, note }); // Passa o emoji atualizado
        console.log('Emoji salvo:', emoji); // Log para verificar o valor salvo
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Humor</Text>
            <EmojiPicker
                initialEmoji={emoji} // Passa o emoji atual para o EmojiPicker
                onSelectEmoji={(emoji) => {
                    setEmoji(emoji); // Atualiza o estado com o emoji selecionado
                    console.log('Emoji atualizado no estado:', emoji); // Log para verificar a atualização
                }}
            />
            <TextInput
                style={styles.input}
                placeholder="Editar nota?"
                value={note}
                onChangeText={setNote}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#FFB703',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
