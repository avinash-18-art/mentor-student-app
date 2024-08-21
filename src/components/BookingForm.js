import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ selectedMentor, onBookingSuccess }) => {
    const [studentName, setStudentName] = useState('');
    const [sessionTime, setSessionTime] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleBooking = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const bookingData = {
                studentName,
                mentorId: selectedMentor.id,
                sessionTime,
            };

            const response = await axios.post('/bookings', bookingData);
            setLoading(false);
            onBookingSuccess(response.data); // Notify parent component of successful booking
        } catch (err) {
            setError('Failed to book the session. Please try again.');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleBooking} className="booking-form">
            <h2>Book a Session with {selectedMentor.name}</h2>

            <div className="form-group">
                <label htmlFor="studentName">Your Name</label>
                <input
                    type="text"
                    id="studentName"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="sessionTime">Select Session Time</label>
                <select
                    id="sessionTime"
                    value={sessionTime}
                    onChange={(e) => setSessionTime(e.target.value)}
                    required
                >
                    <option value="">Select a time</option>
                    {selectedMentor.availability.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>

            {error && <div className="error-message">{error}</div>}
            <button type="submit" disabled={loading}>
                {loading ? 'Booking...' : 'Book Session'}
            </button>
        </form>
    );
};

export default BookingForm;
