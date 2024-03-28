import React, { useState, useEffect } from 'react';

const AdminAccommodation = () => {
    const [accommodations, setAccommodations] = useState([]);
    const [newAccommodation, setNewAccommodation] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
    });
    const [showModal, setShowModal] = useState(false);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAccommodation(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/accommodations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAccommodation)
            });
            const data = await response.json();
            console.log(data);
            fetchAccommodations(); // Refresh accommodations data after adding new accommodation
            // Clear form fields after submission
            setNewAccommodation({
                name: '',
                description: '',
                image: '',
                price: '',
            });
            // Close modal after submission
            setShowModal(false);
        } catch (error) {
            console.error('Error adding accommodation:', error);
        }
    };


    const deleteAccommodation = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/accommodations/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchAccommodations(); // Refresh accommodations data after deleting
            }
        } catch (error) {
            console.error('Error deleting accommodation:', error);
        }
    };

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                {/* Add accommodation button */}
                <button onClick={() => setShowModal(true)} className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Accommodation
                </button>

                {/* Modal for adding accommodation */}
                {showModal && (
                    <div id="add-accommodation-modal" className="fixed inset-0 overflow-y-auto z-10">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>

                            <div className="relative bg-white rounded-lg shadow-md">
                                <div className="flex items-center justify-between p-4 border-b">
                                    <h3 className="text-lg font-medium">Add Accommodation</h3>
                                    <button onClick={() => setShowModal(false)}>&times;</button>
                                </div>
                                <div className="p-4">
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium">Name</label>
                                            <input type="text" name="name" id="name" value={newAccommodation.name} onChange={handleInputChange} className="w-full border-gray-300 rounded-md" required />
                                        </div>
                                        <div>
                                            <label htmlFor="description" className="block text-sm font-medium">Description</label>
                                            <input type="text" name="description" id="description" value={newAccommodation.description} onChange={handleInputChange} className="w-full border-gray-300 rounded-md" required />
                                        </div>
                                        <div>
                                            <label htmlFor="image" className="block text-sm font-medium">Image</label>
                                            <input type="text" name="image" id="image" value={newAccommodation.image} onChange={handleInputChange} className="w-full border-gray-300 rounded-md" required />
                                        </div>
                                        <div>
                                            <label htmlFor="price" className="block text-sm font-medium">Price</label>
                                            <input type="text" name="price" id="price" value={newAccommodation.price} onChange={handleInputChange} className="w-full border-gray-300 rounded-md" required />
                                        </div>
                                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Accommodations table */}
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
                                        <th scope="col" className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accommodations.map((accommodation, index) => (
                                        <tr key={index} className="border-b dark:border-gray-700">
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{accommodation.name}</td>
                                            <td className="px-4 py-3">{accommodation.description}</td>
                                            <td className="px-4 py-3"><img src={accommodation.image} alt={accommodation.name} className="w-24 h-24 object-cover" /></td>
                                            <td className="px-4 py-3">{accommodation.price}</td>
                                            <td className="px-4 py-3">
                                                <button onClick={() => deleteAccommodation(accommodation.id)} className="text-red-500 hover:text-red-700">Delete</button>
                                            </td>
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
