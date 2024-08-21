# Mentor-Student Booking App

## Overview

This is a web application that allows students to book 1x1 sessions with mentors based on their availability and preferences. The application handles scheduling, mentor-student matching, and payment processing. It includes a frontend built with React, a backend powered by Node.js and Express, and a SQLite database for data storage.

## Features

- Mentor and student registration
- Mentor-student matching based on areas of interest
- Scheduling and booking sessions
- Payment processing (basic implementation)
- Static file serving for frontend assets

## Project Structure

- **Frontend**: Built with React
  - `src/components`: Contains React components for different pages and functionality
  - `src/api.js`: Handles API requests to the backend
  - `src/App.js`: Main application component
  - `src/App.css`: Styles for the application

- **Backend**: Built with Node.js and Express
  - `server.js`: Main server file
  - `db.js`: Database setup and connection
  - `models`: Contains database models (mentor, student, booking)
  - `controllers`: Contains business logic (mentorController, studentController, bookingController)
  - `routes`: Contains route definitions (mentorRoutes, studentRoutes, bookingRoutes)
  - `schema.sql`: Database schema definition

## Installation

### Backend

1. Clone the repository:
   ```sh
   git clone https://github.com/avinash-18-art/mentor-student-app.git
   

## Project Structure : 

mentor-student-app/
│
├── backend/
│   ├── node_modules/
│   ├── config/
│   │   └── db.js          # Database connection and setup
│   ├── controllers/
│   │   ├── mentorController.js  # Handlers for mentor-related routes
│   │   ├── studentController.js # Handlers for student-related routes
│   │   └── bookingController.js # Handlers for booking-related routes
│   ├── models/
│   │   ├── mentorModel.js  # Mentor data model
│   │   ├── studentModel.js # Student data model
│   │   └── bookingModel.js # Booking data model
│   ├── routes/
│   │   ├── mentorRoutes.js  # Mentor routes
│   │   ├── studentRoutes.js # Student routes
│   │   └── bookingRoutes.js # Booking routes
│   ├── migrations/
│   │   └── schema.sql      # SQL file to set up database schema
│   ├── .env                # Environment variables (e.g., PORT, DB settings)
│   ├── server.js           # Express server setup and route handling
│   ├── package.json        # Node.js dependencies and scripts
│   └── README.md           # Backend documentation
│
└── frontend/
    ├── node_modules/
    ├── public/
    │   └── index.html      # Main HTML file
    ├── src/
    │   ├── components/
    │   │   ├── MentorList.js     # Component to list mentors
    │   │   ├── BookingForm.js    # Component to handle booking form
    │   │   └── PaymentPage.js    # Component for payment processing
    │   ├── pages/
    │   │   ├── HomePage.js       # Main landing page
    │   │   ├── MentorPage.js     # Page to view mentors
    │   │   └── BookingPage.js    # Page to handle bookings
    │   ├── services/
    │   │   ├── api.js            # API service for making HTTP requests
    │   ├── App.js                # Main React component
    │   ├── index.js              # Entry point for React app
    │   └── styles.css            # Global styles
    ├── .env                      # Frontend environment variables
    ├── package.json              # React dependencies and scripts
    └── README.md                 # Frontend documentation
