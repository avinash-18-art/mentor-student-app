const db = require('./db');

// Create a new booking
const createBooking = (student_id, mentor_id, time_slot, callback) => {
    const query = 'INSERT INTO bookings (student_id, mentor_id, time_slot) VALUES (?, ?, ?)';
    db.run(query, [student_id, mentor_id, time_slot], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, { id: this.lastID });
    });
};

// Get all bookings
const getAllBookings = (callback) => {
    const query = 'SELECT * FROM bookings';
    db.all(query, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Get bookings by student ID
const getBookingsByStudentId = (studentId, callback) => {
    const query = 'SELECT * FROM bookings WHERE student_id = ?';
    db.all(query, [studentId], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Get bookings by mentor ID
const getBookingsByMentorId = (mentorId, callback) => {
    const query = 'SELECT * FROM bookings WHERE mentor_id = ?';
    db.all(query, [mentorId], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

module.exports = {
    createBooking,
    getAllBookings,
    getBookingsByStudentId,
    getBookingsByMentorId
};
