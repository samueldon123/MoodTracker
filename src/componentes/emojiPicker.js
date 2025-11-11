import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const emojis = [
  "😀", "😂", "😍", "😎", "😭", "👍"
];

export default function EmojiPicker({ onSelectEmoji, initialEmoji }) {
    const [selected, setSelected] = useState(initialEmoji || null);

    useEffect(() => {
        setSelected(initialEmoji);
    }, [initialEmoji]);

    return (
        <View style={styles.container}>
            {emojis.map((emoji) => (
                <TouchableOpacity
                    key={emoji}
                    onPress={() => {
                        setSelected(emoji);
                        if (onSelectEmoji) {
                            onSelectEmoji(emoji);
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