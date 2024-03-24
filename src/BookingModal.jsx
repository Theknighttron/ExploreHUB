import React, { useState } from 'react';

const BookingModal = ({ showModal, setShowModal, accommodation }) => {
    const [bookingData, setBookingData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phoneNumber: '',
        date: '',
        additionalDetails: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bookingData); // For testing, log the booking data
        setShowModal(false); // Close the modal after submission
        setBookingData({ // Reset the form after submission
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            phoneNumber: '',
            date: '',
            additionalDetails: '',
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        showModal && (
            <div className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <div className="relative bg-white rounded-lg max-w-md p-6">
                        <span className="absolute top-0 right-0 p-2 cursor-pointer" onClick={handleCloseModal}>
                            &times;
                        </span>
                        <h2 className="text-xl font-bold mb-4">Book Accommodation - {accommodation.name}</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Form fields */}
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block mb-1">First Name:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={bookingData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block mb-1">Last Name:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={bookingData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={bookingData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="country" className="block mb-1">Country:</label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={bookingData.country}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block mb-1">Phone Number:</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={bookingData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="date" className="block mb-1">Date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={bookingData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    );
};

export default BookingModal;
