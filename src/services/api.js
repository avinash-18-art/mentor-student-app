import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend API base URL

// Fetch all mentors
export const getMentors = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/mentors`);
        return response.data;
    } catch (error) {
        console.error('Error fetching mentors:', error);
        throw error;
    }
};

// Fetch a specific mentor by ID
export const getMentorById = async (mentorId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/mentors/${mentorId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching mentor with ID ${mentorId}:`, error);
        throw error;
    }
};

// Create a new booking
export const createBooking = async (mentorId, time) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bookings`, {
            mentorId,
            time,
        });
        return response.data;
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
};

// Fetch bookings for a specific student or mentor
export const getBookings = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/bookings`, {
            params: { userId },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
};

// Process payment (this is a placeholder; replace with actual implementation)
export const processPayment = async (bookingId, paymentDetails) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/payment`, {
            bookingId,
            ...paymentDetails,
        });
        return response.data;
    } catch (error) {
        console.error('Error processing payment:', error);
        throw error;
    }
};
