const express = require('express');
const router = express.Router();
const bookingController = require('./bookingController');

// Route to create a new booking
router.post('/bookings', (req, res) => {
    bookingController.createBooking(req, res);
});

// Route to get all bookings
router.get('/bookings', (req, res) => {
    bookingController.getAllBookings(req, res);
});

// Route to get bookings by student ID
router.get('/bookings/student/:studentId', (req, res) => {
    bookingController.getBookingsForStudent(req, res);
});

// Route to get bookings by mentor ID
router.get('/bookings/mentor/:mentorId', (req, res) => {
    bookingController.getBookingsForMentor(req, res);
});

module.exports = router;
