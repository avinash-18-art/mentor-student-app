const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define the path to your SQLite database file
const DB_PATH = path.resolve(__dirname, 'database.sqlite');

// Create and/or open the SQLite database file
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create tables if they do not exist
const createTables = () => {
    // Create mentors table
    db.run(`
        CREATE TABLE IF NOT EXISTS mentors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            availability TEXT,
            areas_of_expertise TEXT NOT NULL,
            is_premium BOOLEAN NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error('Error creating mentors table:', err.message);
        } else {
            console.log('Mentors table created or already exists.');
        }
    });

    // Create students table
    db.run(`
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            availability TEXT,
            area_of_interest TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error('Error creating students table:', err.message);
        } else {
            console.log('Students table created or already exists.');
        }
    });

    // Create bookings table
    db.run(`
        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER,
            mentor_id INTEGER,
            time_slot TEXT NOT NULL,
            FOREIGN KEY (student_id) REFERENCES students(id),
            FOREIGN KEY (mentor_id) REFERENCES mentors(id)
        )
    `, (err) => {
        if (err) {
            console.error('Error creating bookings table:', err.message);
        } else {
            console.log('Bookings table created or already exists.');
        }
    });
};

// Initialize database and create tables
createTables();

module.exports = db;
