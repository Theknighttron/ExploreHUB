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

app.post("/api/accommodations", (req, res) => {
  const { name, description, image, price } = req.body;

  // Check if the accommodation already exists in the database
  const checkDuplicateSql = `SELECT * FROM accommodations WHERE LOWER(name) = LOWER(?)`;
  db.query(checkDuplicateSql, [name.trim()], (checkErr, checkResult) => {
    if (checkErr) {
      console.error('Error checking for duplicate accommodation:', checkErr);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (checkResult.length > 0) {
      // Accommodation already exists
      res.status(409).json({ error: 'Accommodation already exists' }); // Return a 409 Conflict status
      return;
    }

    // Insert the accommodation if it does not already exist
    const insertSql = `INSERT INTO accommodations (name, description, image, price) VALUES (?, ?, ?, ?)`;
    db.query(insertSql, [name.trim(), description, image, price], (insertErr, insertResult) => {
      if (insertErr) {
        console.error('Error adding accommodation:', insertErr);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      // console.log('Accommodation added successfully:', name);
      res.status(201).json({ message: 'Accommodation added successfully' }); // Return a 201 Created status
    });
  });
});



// API endpoint to fetch all accommodations
app.get('/api/accommodations', (req, res) => {
  db.query('SELECT * FROM accommodations', (err, results) => {
    if (err) {
      console.error('Error fetching accommodations:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(results); 
    }
  });
});

// Define a route to handle GET bookings
app.get('/api/bookings', (req, res) => {
  db.query('SELECT * FROM bookings', (err, results) => {
    if (err) {
      console.error('Error fetching bookings:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(results); // Send the fetched bookings as JSON response
    }
  });
});

// Define a route to handle DELETE bookings
app.delete('/api/bookings/:id', (req, res) => {
  const bookingId = req.params.id;

  // Delete the booking from the MySQL database
  db.query('DELETE FROM bookings WHERE id = ?', bookingId, (err, result) => {
    if (err) {
      console.error('Error deleting booking:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json({ message: 'Booking deleted successfully' });
    }
  });
});


app.delete('/api/accommodations/:id', (req, res) => {
  const accommodationId = req.params.id;

  db.query('DELETE FROM accommodations WHERE id = ?', accommodationId, (err, result) => {
      if (err) {
          console.error('Error deleting accommodation:', err);
          res.status(500).json({ error: 'An error occurred' });
      } else {
          res.status(200).json({ message: 'Accommodation deleted successfully' });
      }
  });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
