import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

const emojis = [
  "😀", "😂", "😍", "😎", "😭", "👍"
];

export default function EmojiPicker({ onEmojiSelected, initialEmoji }) {
    const [selected, setSelected] = useState(initialEmoji || null);

    return (
        <View style={styles.container}>
            {emojis.map((emoji) => (
                <TouchableOpacity
                    key={emoji}
                    onPress={() => {
                        setSelected(emoji);
                        if (onEmojiSelected) {
                            onEmojiSelected(emoji); // Chama a função genérica
                        }
                    }}
                    style={[styles.emojiBox, selected === emoji && styles.selected]}
                >
                    <Text style={styles.emoji}>{emoji}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    emojiBox: {
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 50,
        backgroundColor: '#eee'
    },
    selected: {backgroundColor: '#FFB703'},
    emoji: {fontSize: 28}
});