import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import BookingModal from './BookingModal'; 

const Accommodation = () => {

    const accommodationData = [
        {
            id: '1',
            name: 'Sentrim Amboseli Lodge',
            description: 'Luxurious tented lodge with 60 modern tents with a private view of Mt. Kilimanjaro with very latest in luxury camping with soft beds, an ensuite bathroom with a steaming hot shower, a washbasin and flush toilets.',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/38897865.jpg?k=fb09e88334dfb8ab96d38cae184ff73fcec377d95ea797a40e219994124666ec&o=&hp=1',
            price: '127'
        },
        {
            id:'2',
            name: 'Nairobi City',
            description: 'Offering a blend of urban sophistication and natural beauty. Choose from a range of accommodation options, including boutique hotels, guesthouses, and luxury resorts.',
            image: 'https://www.elewanacollection.com/images/welcome-page/the-collection/arusha-coffee-1.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            price: '1100'
        },
        {
            id:'3',
            name: 'Hotel Englishpoint Mombasa',
            description: 'Guests can enjoy the on-site bar. Several courtyards,  Indian Restaurant and a Pizzeria on the board walk , a pier, a spa and a fitness center.',
            image: 'https://www.amboseliparkkenya.com/wp-content/uploads/2022/01/englishpoint-marina-hotel.jpg',
            price: '450'
        },
        {
            id:'4',
            name: 'Samburu',
            description: 'Explore the rugged landscapes of Samburu National Reserve, home to unique wildlife species adapted to the arid environment.',
            image: 'https://www.elewanacollection.com/images/slider-home/elsas.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            price: '365'
        },
        {
            id:'5',
            name: 'Kitumo Mara Lodges - Masai Mara',
            description: 'exclusive lodge offers a unique and unforgettable experience, where you can immerse yourself in the beauty of the Mara while indulging in top-of-the-line amenities and personalised service',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcWJKUwX3Lvv_xMz9uO0pQM00JB3vfWd7w9lilsE60Q&s',
            price: '220'
        },
        {
            id:'6',
            name: 'Laikipia',
            description: 'Explore the rugged beauty of Laikipia, where luxury safari lodges and exclusive ranch retreats offer unparalleled wildlife encounters.',
            image: 'https://www.elewanacollection.com/images/welcome-page/the-collection/pioneer-2.jpg',
            price: '690'
        },
        {
            id:'7',
            name: 'Kicheche Bush Camp - Masai Mara',
            description: 'Comprising only six luxury tents, this secluded camp rests in a thicket of euclea and African olive trees, and offers a luxurious classic safari experience.',
            image: 'https://kicheche.com/wp-content/uploads/2018/07/kbc-inside-tent.jpg',
            price: '150'
        },
        {
            id:'8',
            name: 'Sarova Lion Hill Game Lodge - Lake Nakuru',
            description: 'An idyllic escape, the lodge is surrounded by beautifully landscaped gardens and offers panoramic views of the lake and the surrounding National Park.',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/227579589.jpg?k=85fc0ed6c4a3fa6ae015d987c307fa110ca2b12ac9da81127e4fd30b17bdf147&o=&hp=1',
            price: '450'
        },
        {
            id:'9',
            name: 'Nairobi Serena Hotel',
            description: 'The tranquil setting and the hotel’s beautiful gardens are a welcome escape from the noise and bustle of one of Africa’s most dynamic cities.',
            image: 'https://www.maasaimarakenyapark.com/wp-content/uploads/2021/03/Nairobi-Serena-Hotel.jpg',
            price: '620'
        },
        {
            id:'10',
            name: 'Mara Serena Safari Lodge - Masai Mara',
            description: 'The Mara Serena Safari Lodge has a beautiful hilltop location and the annual migration of wildebeest, zebra and gazelle takes place across these plains, and even outside of the migration season you can look forward to spectacular sightings.',
            image: 'https://www.masaimara.com/assets/img/viewing-deck-serena-lodge-masai-mara.jpg',
            price: '250'
        },
        {
            id:'11',
            name: 'The Sands at Nomad Hotel',
            description: 'Waters with an abundance of marine life, nearby coastal forests teeming with birds and insects, and pristine beaches make The Sands the perfect beach holiday destination for those looking for a little adventure.',
            image: 'https://www.thesandskenya.com/wp-content/uploads/2019/06/bar_people.jpg',
            price: '270'
        },
        {
            id:'12',
            name: 'Eka Hotel - Nairobi',
            description: 'Centrally positioned on Mombasa Avenue for easy access to Jomo Kenyatta and Wilson Airports, as well the vibrant city centre of Nairobi and attractions such as Nairobi National Museum and the Giraffe Centre',
            image: 'https://www.porini.com/wp-content/uploads/2015/09/eka-hotel-nairobi-1444477192.jpg',
            price: '550'
        },
        {
            id:'13',
            name: 'Hemingways - Nairobi',
            description: 'This luxurious boutique hotel is a haven of elegant charm. With great service and a tranquil atmosphere, Hemingways Nairobi makes an ideal 1- or 2-night stopover for travellers beginning or ending their Kenya safari.',
            image: 'https://safarifrank.com/wp-content/uploads/2019/12/hemingways-hotel-nairobi-kenya-big-fountain-1200x675.jpg',
            price: '850'
        },
        {
            id:'14',
            name: 'Kinondo Kwetu Camp',
            description: 'This intimate lodge offers beach luxury in a relaxed and laidback atmosphere. Kindo Kwetu is th only hotel on the private Galu Beach and is surrounded by lush coastal forest.',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/ca/8c/06/kinondo-kwetu.jpg',
            price: '380'
        },
        {
            id:'15',
            name: 'Borana Lodge - Nanyuki',
            description: 'Set amidst the scenic landscapes of the Laikipia Plateau, prepare to be captivated by the awe-inspiring views of Mount Kenya as you embark on thrilling game drives',
            image: 'https://theholidaydealers.com/wp-content/uploads/2023/03/Borana-Lodge-80-850x540.jpg',
            price: '220'
        },
        {
            id: '16',
            name: 'Amboseli sopa lodge',
            description: 'Set within mature wooded gardens with a wide variety of trees and plants and also home to numerous species of birds as well as monkeys, mongooses, squirrels, duikers, the occasional gazelle and, once in a while, even an ever inquisitive leopard.',
            image: 'https://www.achieveglobalsafaris.com/wp-content/uploads/2020/03/Amboseli-Sopa-Lodges.jpg',
            price: '215'
        },
        {
            id: '17',
            name: 'Amboseli serena safari lodge',
            description: "Created for adventurers with an African dream. With Mount Kilimanjaro soaring majestically just beyond the golden, acacia-specked savannah, the safari lodge offers a graceful blend of stark beauty and lavish comfort in the heart of Kenya's Amboseli National Park.",
            image: 'https://files.adventure-life.com/26/98/78/Reception_Area/1300x820.webp',
            price: '160'
        },
        {
            id: '18',
            name: 'Villa Rosa Kempinski - Nairobi City',
            description: 'Our hotel offers an array of exquisite dining options, including Café Villa Rosa, where a diverse breakfast buffet is served daily.',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/519348104.jpg?k=99ccdef09bb514e4116c38bf1ca50e03e0e5c3389d9963208d637dc54dccf507&o=&hp=1',
            price: '690'
        },
        {
            id: '19',
            name: 'Radisson Blu Hotel - Nairobi City',
            description: 'The hotel has 12 meeting rooms and a business center and is equipped with a bar, a spa center and fitness center. Guests can choose from a range of breakfast options offered at the property which include American, Continental, Halal and Vegetarian breakfasts.',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/2b/5f/89/42/hotel-exterior-night.jpg',
            price: '560'
        },
        {
            id: '20',
            name: 'Fairmont The Norfolk - Nairobi City',
            description: "Fairmont The Norfolk is a Kenyan landmark steeped in heritage and sophistication. It's also one of the best business hotels in Nairobi, with six elegant venues capable of hosting everything from board meetings for six to lectures for up to 100.",
            image: 'https://www.naturaltoursandsafaris.com/wp-content/uploads/2023/10/Fairmont-Norfolk-scaled.jpg',
            price: '620'
        },
        {
            id: '21',
            name: 'Sarova Whitesands Beach Resort & Spa - Mombasa',
            description: 'Luxury hotel in an idyllic setting on the shores of the Indian Ocean. The hotel, located on the North Coast of Mombasa, is nestled amongst towering palms and lush gardens with five pools including a quiet pool, a pool bar and a waterslide.',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/224831931.jpg?k=479145ed944b5b31a5daa319db99703e0ce74e0adfb40a5dcbc72fa6b9939388&o=&hp=1',
            price: '710'
        },
        {
            id: '22',
            name: 'Serena Beach Resort & Spa - Mombasa',
            description: "Serena Beach Resort & Spa in Mombasa welcomes guests to an oasis of tranquillity, enveloped by whispering coconut palms and lush gardens, alongside one of the Indian Ocean's most beautiful beaches. ",
            image: 'https://image-tc.galaxy.tf/wijpeg-1no9kmdulhgjl0ybqzt5crery/sbm-se-030.jpg',
            price: '350'
        },
        

    ];

    // {
    //     id: '',
    //     name: '',
    //     description: '',
    //     image: '',
    //     price: ''
    // },

    const places = ['Amboseli', 'Nairobi', 'Mombasa', 'Samburu', 'Masai Mara', 'Lake Nakuru', 'Laikipia', 'Nanyuki', 'The Sands at Nomad Hotel', 'Kinondo Kwetu Camp'];

    const [accommodations, setAccommodations] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedAccommodation, setSelectedAccommodation] = useState(null); 
    const [selectedPlaces, setSelectedPlaces] = useState([]);

    const handleBookClick = (accommodationData) => {
        setSelectedAccommodation(accommodationData);
        setShowModal(true);
    };

    useEffect(() => {
        insertAccommodationsToDatabase();
        fetchAccommodations();
    }, []); // Empty dependency array ensures useEffect runs only on mount

    const insertAccommodationsToDatabase = async () => {
        try {
            for (const accommodation of accommodationData) {
                // Check if the accommodation is already present in the database
                const existingAccommodation = accommodations.find(acc => acc.name === accommodation.name);
                if (!existingAccommodation) {
                    // If accommodation is not found, insert it into the database
                    const response = await fetch('http://localhost:5000/api/accommodations', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(accommodation)
                    });
    
                    const data = await response.json();
                    console.log(data.message); // Log the response message
                }
            }
        } catch (error) {
            console.error('Error inserting accommodations:', error);
        }
    };

    // Function to handle checkbox change
    const handleCheckboxChange = (place) => {
        if (selectedPlaces.includes(place)) {
            // If the place is already selected, remove it
            setSelectedPlaces(selectedPlaces.filter(p => p !== place));
        } else {
            // If the place is not selected, add it
            setSelectedPlaces([...selectedPlaces, place]);
        }
    };

   const fetchAccommodations = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/accommodations');
        const data = await response.json();
        
        // Filter out accommodations that are already present in accommodationData
        const filteredData = data.filter(accommodation => {
            return !accommodationData.some(item => item.name === accommodation.name);
        });

        setAccommodations([...filteredData, ...accommodationData]);
    } catch (error) {
        console.error('Error fetching accommodations:', error);
    }
};


    // Filter accommodations based on selected places
        const filteredAccommodations = accommodations.filter(accommodation => {
            // If no places are selected, return true for all accommodations
            if (selectedPlaces.length === 0) {
                return true;
            }
            // Check if the accommodation's name contains any of the selected places
            return selectedPlaces.some(place => accommodation.name.toLowerCase().includes(place.toLowerCase()));
        });

    return (
        <div>
            <Navbar />
            <div className="w-full mx-auto p-5 sm:p-10 md:p-16">
                <div className="text-center p-10">
                    <h1 className="font-bold text-4xl mb-4">Discover Kenya</h1>
                    <h1 className="text-3xl">Explore Our Diverse Accommodation Options</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {/* Render checkboxes for places */}
                    <div className="col-span-1">
                        <h2 className="font-bold text-lg mb-4">Locations</h2>
                        {places.map((place, index) => (
                            <div key={index} className="mb-2">
                                <input
                                    type="checkbox"
                                    id={place}
                                    checked={selectedPlaces.includes(place)}
                                    onChange={() => handleCheckboxChange(place)}
                                    className="mr-2"
                                />
                                <label htmlFor={place}>{place}</label>
                            </div>
                        ))}
                    </div>
                    {/* Render filtered accommodations */}
                    <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        {filteredAccommodations.map((accommodation, index) => (
                            <div key={index} className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                                <img src={accommodation.image} alt={accommodation.name} className="w-full mb-3" />
                                <div className="p-4 pt-2">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                                            {accommodation.name}
                                        </div>
                                        <p className="text-gray-700 text-sm">{accommodation.description}</p>
                                        <p className="mt-2 text-gray-800">${accommodation.price} per night</p>
                                        <button onClick={() => handleBookClick(accommodation)} className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded mt-4">Book</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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