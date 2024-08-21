const db = require('./db');

// Get all mentors
const getAllMentors = (req, res) => {
    db.all('SELECT * FROM mentors', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

// Get a specific mentor by ID
const getMentorById = (req, res) => {
    const mentorId = parseInt(req.params.mentorId, 10);

    if (isNaN(mentorId)) {
        return res.status(400).json({ error: 'Invalid mentor ID' });
    }

    db.get('SELECT * FROM mentors WHERE id = ?', [mentorId], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Mentor not found' });
        }
        res.json(row);
    });
};

// Create a new mentor
const createMentor = (req, res) => {
    const { name, availability, areas_of_expertise, is_premium } = req.body;

    if (!name || !areas_of_expertise) {
        return res.status(400).json({ error: 'Name and areas of expertise are required' });
    }

    db.run(
        'INSERT INTO mentors (name, availability, areas_of_expertise, is_premium) VALUES (?, ?, ?, ?)',
        [name, availability, areas_of_expertise, is_premium],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: this.lastID, message: 'Mentor created successfully' });
        }
    );
};

module.exports = {
    getAllMentors,
    getMentorById,
    createMentor
};
