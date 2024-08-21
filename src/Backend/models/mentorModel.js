const db = require('./db');

// Create a new mentor
const createMentor = (name, availability, areas_of_expertise, is_premium, callback) => {
    const query = 'INSERT INTO mentors (name, availability, areas_of_expertise, is_premium) VALUES (?, ?, ?, ?)';
    db.run(query, [name, availability, areas_of_expertise, is_premium], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, { id: this.lastID });
    });
};

// Get all mentors
const getAllMentors = (callback) => {
    const query = 'SELECT * FROM mentors';
    db.all(query, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Get a mentor by ID
const getMentorById = (id, callback) => {
    const query = 'SELECT * FROM mentors WHERE id = ?';
    db.get(query, [id], (err, row) => {
        if (err) {
            return callback(err);
        }
        if (!row) {
            return callback(new Error('Mentor not found'));
        }
        callback(null, row);
    });
};

module.exports = {
    createMentor,
    getAllMentors,
    getMentorById
};
