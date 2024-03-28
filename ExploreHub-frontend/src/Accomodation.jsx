import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import BookingModal from './BookingModal'; 

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
        },
        {
            name: 'Kicheche Bush Camp',
            description: 'Comprising only six luxury tents, this secluded camp rests in a thicket of euclea and African olive trees, and offers a luxurious classic safari experience.',
            image: 'https://kicheche.com/wp-content/uploads/2018/07/kbc-inside-tent.jpg',
            price: '150'
        },
        {
            name: 'Sarova Lion Hill Game Lodge',
            description: 'An idyllic escape, the lodge is surrounded by beautifully landscaped gardens and offers panoramic views of the lake and the surrounding National Park.',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/227579589.jpg?k=85fc0ed6c4a3fa6ae015d987c307fa110ca2b12ac9da81127e4fd30b17bdf147&o=&hp=1',
            price: '450'
        },
        {
            name: 'Nairobi Serena Hotel',
            description: 'The tranquil setting and the hotel’s beautiful gardens are a welcome escape from the noise and bustle of one of Africa’s most dynamic cities.',
            image: 'https://www.maasaimarakenyapark.com/wp-content/uploads/2021/03/Nairobi-Serena-Hotel.jpg',
            price: '620'
        },
        {
            name: 'Mara Serena Safari Lodge',
            description: 'The Mara Serena Safari Lodge has a beautiful hilltop location and the annual migration of wildebeest, zebra and gazelle takes place across these plains, and even outside of the migration season you can look forward to spectacular sightings.',
            image: 'https://www.masaimara.com/assets/img/viewing-deck-serena-lodge-masai-mara.jpg',
            price: '250'
        },
        {
            name: 'The Sands at Nomad Hotel',
            description: 'Waters with an abundance of marine life, nearby coastal forests teeming with birds and insects, and pristine beaches make The Sands the perfect beach holiday destination for those looking for a little adventure.',
            image: 'https://www.thesandskenya.com/wp-content/uploads/2019/06/bar_people.jpg',
            price: '270'
        },
        {
            name: 'Eka Hotel',
            description: 'Centrally positioned on Mombasa Avenue for easy access to Jomo Kenyatta and Wilson Airports, as well the vibrant city centre of Nairobi and attractions such as Nairobi National Museum and the Giraffe Centre',
            image: 'https://www.porini.com/wp-content/uploads/2015/09/eka-hotel-nairobi-1444477192.jpg',
            price: '550'
        },
        {
            name: 'Hemingways Nairobi',
            description: 'This luxurious boutique hotel is a haven of elegant charm. With great service and a tranquil atmosphere, Hemingways Nairobi makes an ideal 1- or 2-night stopover for travellers beginning or ending their Kenya safari.',
            image: 'https://safarifrank.com/wp-content/uploads/2019/12/hemingways-hotel-nairobi-kenya-big-fountain-1200x675.jpg',
            price: '850'
        },
        {
            name: 'Kinondo Kwetu Camp',
            description: 'This intimate lodge offers beach luxury in a relaxed and laidback atmosphere. Kindo Kwetu is th only hotel on the private Galu Beach and is surrounded by lush coastal forest.',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/ca/8c/06/kinondo-kwetu.jpg',
            price: '380'
        },
        {
            name: 'Borana Lodge',
            description: 'Set amidst the scenic landscapes of the Laikipia Plateau, prepare to be captivated by the awe-inspiring views of Mount Kenya as you embark on thrilling game drives',
            image: 'https://theholidaydealers.com/wp-content/uploads/2023/03/Borana-Lodge-80-850x540.jpg',
            price: '220'
        },

    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedAccommodation, setSelectedAccommodation] = useState(null); 

    const handleBookClick = (accommodationData) => {
        setSelectedAccommodation(accommodationData);
        setShowModal(true);
    };

    useEffect(() => {
        insertAccommodationsToDatabase();
    }, []); // Empty dependency array ensures useEffect runs only on mount

    const insertAccommodationsToDatabase = async () => {
        try {
            for (const accommodation of accommodationData) {
                const response = await fetch('http://localhost:5000/api/accommodations', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(accommodation) // Send each accommodation object individually
                });
    
                const data = await response.json();
                console.log(data.message); // Log the response message
            }
        } catch (error) {
            console.error('Error inserting accommodations:', error);
        }
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