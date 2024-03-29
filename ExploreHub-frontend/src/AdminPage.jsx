import React, { useState, useEffect } from 'react';
import AdminBookingsTable from './AdminBookingsTable'; 
import AdminAccommodation from './AdminAccommodation'; // Import the AdminAccommodation component
import ParentComponent from './ParentComponent';

const AdminPage = () => {
  // State to store bookings data
  const [bookings, setBookings] = useState([]);
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState('dashboard');

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

  // Function to handle click event of the "Accommodation" button
  const handleAccommodationClick = () => {
    setActiveComponent('accommodation'); // Update active component to 'accommodation'
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="bg-blue-400 w-64 overflow-y-auto">
        {/* Sidebar header */}
        <a href="/">
          <div className="p-4 bg-cyan-900 self-center text-2xl font-semibold whitespace-nowrap  text-white">ExploreHub</div>
        </a>
        {/* Sidebar menu */}
        <ul className="p-4">
          <a href="/admin">
            <button className="py-2 hover:bg-gray-300 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center">
              Dashboard
            </button>
          </a>
          <button onClick={handleAccommodationClick} className="py-2 hover:bg-gray-300 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center">
            Accommodation
          </button>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-5 overflow-y-auto">
        {/* Dashboard header */}
        <h1 className='text-center font-semibold mt-5 text-3xl'>ACCOMMODATION BOOKING DATA</h1>
        {/* Conditional rendering based on active component */}
        {activeComponent === 'dashboard' && (
          <ParentComponent bookings={bookings} />
        )}
        {activeComponent === 'accommodation' && (
          <AdminAccommodation />
        )}
      </div>
    </div>
  );
};

export default AdminPage;
