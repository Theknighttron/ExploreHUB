import React, { useState, useEffect } from 'react';
import AdminBookingsTable from './AdminBookingsTable'; 

const AdminPage = () => {
  // State to store bookings data
  const [bookings, setBookings] = useState([]);

  // Fetch bookings data from the server on component mount
  useEffect(() => {
    fetchBookings(); // Call fetchBookings function on component mount
  }, []); // Empty dependency array ensures useEffect runs only on mount

  // Function to fetch bookings data from the server
  const fetchBookings = () => {
    // Replace the URL with your backend API endpoint to fetch bookings
    fetch('http://localhost:5000/api/bookings')
      .then(response => response.json())
      .then(data => {
        setBookings(data); // Update bookings state with fetched data
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  };

  return (
    <div>
      {/* Render the AdminBookingsTable component and pass the bookings data as prop */}
      <h1 className='text-center font-semibold mt-5 text-3xl'>ACCOMMODATION BOOKING DATA</h1>
      <AdminBookingsTable bookings={bookings} />
    </div>
  );
};

export default AdminPage;
