-- Create table for mentors
CREATE TABLE IF NOT EXISTS mentors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    availability TEXT,
    areas_of_expertise TEXT NOT NULL,
    is_premium BOOLEAN NOT NULL DEFAULT 0
);

-- Create table for students
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    availability TEXT,
    area_of_interest TEXT NOT NULL
);

-- Create table for bookings
CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL,
    mentor_id INTEGER NOT NULL,
    time_slot TEXT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (mentor_id) REFERENCES mentors(id)
);
