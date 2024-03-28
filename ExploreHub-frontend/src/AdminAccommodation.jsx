import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';

const AdminAccommodation = () => {
    const [accommodations, setAccommodations] = useState([]);

    useEffect(() => {
        fetchAccommodations();
    }, []);

    const fetchAccommodations = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/accommodations');
            const data = await response.json();
            setAccommodations(data);
        } catch (error) {
            console.error('Error fetching accommodations:', error);
        }
    };

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Name</th>
                                        <th scope="col" className="px-4 py-3">Description</th>
                                        <th scope="col" className="px-4 py-3">Image</th>
                                        <th scope="col" className="px-4 py-3">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accommodations.map((accommodation, index) => (
                                        <tr key={index} className="border-b dark:border-gray-700">
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{accommodation.name}</td>
                                            <td className="px-4 py-3">{accommodation.description}</td>
                                            <td className="px-4 py-3"><img src={accommodation.image} alt={accommodation.name} className="w-24 h-24 object-cover" /></td>
                                            <td className="px-4 py-3">{accommodation.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AdminAccommodation;
