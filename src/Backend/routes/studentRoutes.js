const express = require('express');
const router = express.Router();
const studentController = require('./studentController');

// Route to create a new student
router.post('/students', (req, res) => {
    studentController.createStudent(req, res);
});

// Route to get all students
router.get('/students', (req, res) => {
    studentController.getAllStudents(req, res);
});

// Route to get a specific student by ID
router.get('/students/:studentId', (req, res) => {
    studentController.getStudentById(req, res);
});

module.exports = router;
