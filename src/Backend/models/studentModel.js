const db = require('./db');

// Create a new student
const createStudent = (name, availability, area_of_interest, callback) => {
    const query = 'INSERT INTO students (name, availability, area_of_interest) VALUES (?, ?, ?)';
    db.run(query, [name, availability, area_of_interest], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, { id: this.lastID });
    });
};

// Get all students
const getAllStudents = (callback) => {
    const query = 'SELECT * FROM students';
    db.all(query, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Get a student by ID
const getStudentById = (id, callback) => {
    const query = 'SELECT * FROM students WHERE id = ?';
    db.get(query, [id], (err, row) => {
        if (err) {
            return callback(err);
        }
        if (!row) {
            return callback(new Error('Student not found'));
        }
        callback(null, row);
    });
};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById
};
