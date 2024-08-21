const db = require('./db');

// Get all students
const getAllStudents = (req, res) => {
    db.all('SELECT * FROM students', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

// Get a specific student by ID
const getStudentById = (req, res) => {
    const studentId = parseInt(req.params.studentId, 10);

    if (isNaN(studentId)) {
        return res.status(400).json({ error: 'Invalid student ID' });
    }

    db.get('SELECT * FROM students WHERE id = ?', [studentId], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(row);
    });
};

// Create a new student
const createStudent = (req, res) => {
    const { name, availability, area_of_interest } = req.body;

    if (!name || !area_of_interest) {
        return res.status(400).json({ error: 'Name and area of interest are required' });
    }

    db.run(
        'INSERT INTO students (name, availability, area_of_interest) VALUES (?, ?, ?)',
        [name, availability, area_of_interest],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: this.lastID, message: 'Student created successfully' });
        }
    );
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent
};
