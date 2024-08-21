import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const MentorPage = () => {
    const { mentorId } = useParams();  // Extract mentorId from URL
    const [mentor, setMentor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) return <p>Loading mentor details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="mentor-page">
            <h2>{mentor.name}</h2>
            <p><strong>Expertise:</strong> {mentor.areas_of_expertise.join(', ')}</p>
            <p><strong>Availability:</strong> {mentor.availability.join(', ')}</p>
            <p><strong>Is Premium:</strong> {mentor.is_premium ? 'Yes' : 'No'}</p>
            
            <Link to={`/book/${mentorId}`} className="cta-button">
                Book a Session
            </Link>
        </div>
    );
};

export default MentorPage;
