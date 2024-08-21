const express = require('express');
const router = express.Router();
const mentorController = require('./mentorController');

// Route to create a new mentor
router.post('/mentors', (req, res) => {
    mentorController.createMentor(req, res);
});

// Route to get all mentors
router.get('/mentors', (req, res) => {
    mentorController.getAllMentors(req, res);
});

// Route to get a specific mentor by ID
router.get('/mentors/:mentorId', (req, res) => {
    mentorController.getMentorById(req, res);
});

module.exports = router;
