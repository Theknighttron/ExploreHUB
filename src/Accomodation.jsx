import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import BookingModal from './BookingModal'; // Import the BookingModal component

const Accommodation = () => {

    const accommodationData = [
        {
            name: 'Amboseli',
            description: 'Choose from a variety of accommodations, from luxury lodges to tented camps, and enjoy unrivaled wildlife viewing opportunities.',
            image: 'https://www.elewanacollection.com/images/welcome-page/the-collection/loisaba-tented-2.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            price: '600'
        },
        {
            name: 'Nairobi City',
            description: 'Offering a blend of urban sophistication and natural beauty. Choose from a range of accommodation options, including boutique hotels, guesthouses, and luxury resorts.',
            image: 'https://www.elewanacollection.com/images/welcome-page/the-collection/arusha-coffee-1.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            price: '1100'
        },
        {
            name: 'Mombasa',
            description: 'Experience the vibrant coastal city of Mombasa with our range of accommodation options, from beachfront resorts to boutique hotels.',
            image: 'https://www.elewanacollection.com/images/slider-home/afrochic.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            price: '350'
        },
        {
            name: 'Samburu',
            description: 'Explore the rugged landscapes of Samburu National Reserve, home to unique wildlife species adapted to the arid environment.',
            image: 'https://www.elewanacollection.com/images/slider-home/elsas.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            price: '365'
        },
        {
            name: 'Masai Mara',
            description: 'Experience the iconic Masai Mara with our diverse range of accommodation options, from luxury lodges overlooking the savannah to intimate tented camps nestled amidst the wildlife.',
            image: 'https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-f092426/tanzania-specialist.com/wp-content/uploads/2023/11/Tanzania-Grumeti-Serengeti-River-Lodge-Guest-Area-exterior-1-1024x576.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            price: '820'
        },
        {
            name: 'Laikipia',
            description: 'Explore the rugged beauty of Laikipia, where luxury safari lodges and exclusive ranch retreats offer unparalleled wildlife encounters.',
            image: 'https://www.elewanacollection.com/images/welcome-page/the-collection/pioneer-2.jpg',
            price: '690'
        }
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedAccommodation, setSelectedAccommodation] = useState(null); // State to store selected accommodation data

    const handleBookClick = (accommodationData) => {
        setSelectedAccommodation(accommodationData);
        setShowModal(true);
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="text-center p-10">
                    <h1 className="font-bold text-4xl mb-4">Discover Kenya</h1>
                    <h1 className="text-3xl">Explore Our Diverse Accommodation Options</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {/* Accommodation Cards */}
                    {accommodationData.map((accommodation, index) => (
                        <div key={index} className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                            <img src={accommodation.image} alt={accommodation.name} className="w-full mb-3" />
                            <div className="p-4 pt-2">
                                <div className="mb-8">
                                    <div className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                                        {accommodation.name}
                                    </div>
                                    <p className="text-gray-700 text-sm">{accommodation.description}</p>
                                    <p className="mt-2 text-gray-800">${accommodation.price} per night</p> {/* Display price here */}
                                    {/* Button to Book */}
                                    <button onClick={() => handleBookClick(accommodation)} className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded mt-4">Book</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Render the BookingModal component */}
            {selectedAccommodation && (
                <BookingModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    accommodation={selectedAccommodation}
                />
            )}
            <Footer />
        </div>
    );
}


export default Accommodation;