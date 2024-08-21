import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MentorPage from './pages/MentorPage'
import BookingPage from './pages/BookingPage'
import PaymentPage from './pages/PaymentPage'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentors/:mentorId" element={<MentorPage />} />
          <Route path="/book/:mentorId" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
