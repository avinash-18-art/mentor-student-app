import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MentorList = ({ areaOfInterest, onSelectMentor }) => {
    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch mentors based on the student's area of interest
        const fetchMentors = async () => {
            try {
                const response = await axios.get(`/mentors?area_of_expertise=${areaOfInterest}`);
                setMentors(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch mentors. Please try again.');
                setLoading(false);
            }
        };

        fetchMentors();
    }, [areaOfInterest]);

    if (loading) {
        return <div>Loading mentors...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="mentor-list">
            <h2>Available Mentors</h2>
            {mentors.length > 0 ? (
                <ul>
                    {mentors.map(mentor => (
                        <li key={mentor.id} onClick={() => onSelectMentor(mentor)}>
                            <div>
                                <strong>{mentor.name}</strong>
                                <p>Expertise: {mentor.areas_of_expertise.join(', ')}</p>
                                <p>Availability: {mentor.availability.join(', ')}</p>
                                {mentor.is_premium && <span className="premium-label">Premium</span>}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No mentors available for the selected area of interest.</div>
            )}
        </div>
    );
};

export default MentorList;
