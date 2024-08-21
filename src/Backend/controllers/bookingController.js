const db = require('./db');

// Create a new booking
const createBooking = (req, res) => {
    const { student_id, mentor_id, time_slot } = req.body;

    if (!student_id || !mentor_id || !time_slot) {
        return res.status(400).json({ error: 'Student ID, Mentor ID, and time slot are required' });
    }

    db.run(
        'INSERT INTO bookings (student_id, mentor_id, time_slot) VALUES (?, ?, ?)',
        [student_id, mentor_id, time_slot],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: this.lastID, message: 'Booking created successfully' });
        }
    );
};

// Get all bookings
const getAllBookings = (req, res) => {
    db.all('SELECT * FROM bookings', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

// Get bookings for a specific student
const getBookingsForStudent = (req, res) => {
    const studentId = parseInt(req.params.studentId, 10);

    if (isNaN(studentId)) {
        return res.status(400).json({ error: 'Invalid student ID' });
    }

    db.all('SELECT * FROM bookings WHERE student_id = ?', [studentId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

// Get bookings for a specific mentor
const getBookingsForMentor = (req, res) => {
    const mentorId = parseInt(req.params.mentorId, 10);

    if (isNaN(mentorId)) {
        return res.status(400).json({ error: 'Invalid mentor ID' });
    }

    db.all('SELECT * FROM bookings WHERE mentor_id = ?', [mentorId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

module.exports = {
    createBooking,
    getAllBookings,
    getBookingsForStudent,
    getBookingsForMentor
};
