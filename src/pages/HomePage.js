import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="header">
                <h1>Welcome to MentorMatch</h1>
                <p>Your journey to learning starts here. Connect with expert mentors in your area of interest.</p>
                <Link to="/book" className="cta-button">
                    Book a Session
                </Link>
            </header>

            <section className="features">
                <h2>Why Choose MentorMatch?</h2>
                <div className="feature-list">
                    <div className="feature-item">
                        <h3>Expert Mentors</h3>
                        <p>Learn from industry professionals with years of experience.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Personalized Learning</h3>
                        <p>Get 1-on-1 sessions tailored to your specific learning needs.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Flexible Scheduling</h3>
                        <p>Book sessions at times that fit your schedule.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Affordable Pricing</h3>
                        <p>Choose from free and premium mentors to match your budget.</p>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <ol className="steps-list">
                    <li>Select your area of interest and find a mentor.</li>
                    <li>Book a session at a time that works for you.</li>
                    <li>Join the session and start learning!</li>
                </ol>
            </section>

            <footer className="footer">
                <p>&copy; 2024 MentorMatch. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
