import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
    const { mentorId } = useParams();  // Extract mentorId from URL
    const navigate = useNavigate();  // Used to navigate to another page after booking
    const [mentor, setMentor] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bookingError, setBookingError] = useState(null);

    useEffect(() => {
        const fetchMentorDetails = async () => {
            try {
                const response = await axios.get(`/mentors/${mentorId}`);
                setMentor(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load mentor details.');
                setLoading(false);
            }
        };

        fetchMentorDetails();
    }, [mentorId]);

    const handleBooking = async () => {
        if (!selectedTime) {
            setBookingError('Please select a time slot.');
            return;
        }

        try {
            await axios.post('/bookings', {
                mentorId,
                time: selectedTime,
            });
            navigate('/payment');
        } catch (err) {
            setBookingError('Failed to book the session. Please try again.');
        }
    };

    if (loading) return <p>Loading mentor details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="booking-page">
            <h2>Book a Session with {mentor.name}</h2>
            <p><strong>Expertise:</strong> {mentor.areas_of_expertise.join(', ')}</p>
            <p><strong>Available Slots:</strong></p>
            <div className="time-slots">
                {mentor.availability.map((slot, index) => (
                    <button
                        key={index}
                        className={`time-slot ${selectedTime === slot ? 'selected' : ''}`}
                        onClick={() => setSelectedTime(slot)}
                    >
                        {slot}
                    </button>
                ))}
            </div>
            {bookingError && <p className="error">{bookingError}</p>}
            <button onClick={handleBooking} className="cta-button">
                Confirm Booking
            </button>
        </div>
    );
};

export default BookingPage;
