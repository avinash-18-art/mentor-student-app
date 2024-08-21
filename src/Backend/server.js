const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env

// Initialize Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const mentorRoutes = require('./mentorRoutes');
const studentRoutes = require('./studentRoutes');
const bookingRoutes = require('./bookingRoutes');

// Middleware
app.use(bodyParser.json()); // For parsing application/json

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/api', mentorRoutes);
app.use('/api', studentRoutes);
app.use('/api', bookingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
