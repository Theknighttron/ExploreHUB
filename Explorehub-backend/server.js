const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Create connection to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'demo',
  password: 'demo1234',
  database: 'exploreHub',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API endpoint to handle booking data
app.post('/api/bookings', (req, res) => {
  const { firstName, lastName, email, country, phoneNumber, date, accommodationName, price } = req.body;

  console.log('Received booking data:', req.body); // Log received booking data
  
  const bookingData = {
      firstName,
      lastName,
      email,
      country,
      phoneNumber,
      date,
      accommodationName,
      price,
  };

  // Insert data into MySQL database
  db.query('INSERT INTO bookings SET ?', bookingData, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json({ message: 'Booking successful' });
    }
  });
});


// API endpoint to fetch all bookings
app.get('/api/bookings', (req, res) => {
  // Query all bookings from the database
  db.query('SELECT * FROM bookings', (err, results) => {
    if (err) {
      console.error('Error fetching bookings:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(results); // Send the fetched bookings as JSON response
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
