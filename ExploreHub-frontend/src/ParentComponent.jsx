import React, { useState, useEffect } from 'react';
import AdminBookingsTable from './AdminBookingsTable';
import axios from 'axios';

const ParentComponent = () => {
  const [bookings, setBookings] = useState([]);

  // Function to fetch bookings from the backend
  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []); // Fetch bookings on component mount

  // Function to delete a booking
  const onDeleteBooking = async (id) => {
    try {
      // Send a DELETE request to the backend endpoint
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      // Update state by filtering out the deleted booking
      setBookings(bookings.filter(booking => booking.id !== id));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <div>
      <AdminBookingsTable bookings={bookings} onDeleteBooking={onDeleteBooking} />
    </div>
  );
};

export default ParentComponent;
