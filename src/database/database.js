import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('moods.db')

export async function initDB() {
    await db.execAsync(`CREATE TABLE IF NOT EXISTS moods (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        emoji TEXT NOT NULL,
        note TEXT NULL
        );
        `);
}

// --- CRUD ---
// - CREATE
export async function addMood(emoji, note, date) {
    await db.runAsync('INSERT INTO moods (emoji, note, date) VALUES (?, ?, ?);', [emoji, note, date]);
}
// - READ
export async function getAllMoods() {
    const allRows = await db.getAllAsync('SELECT * FROM moods ORDER BY id DESC')
    return allRows;
}
// - UPDATE
export async function updateMoods(id, emoji, note) {
    await db.runAsync('UPDATE moods SET emoji = ?, note = ? WHERE id = ?;', [emoji, note, id]);
}
// - DELETE
export async function deleteMood(id) {
    await db.runAsync('DELETE FROM moods WHERE id = ?;', [id]);
}