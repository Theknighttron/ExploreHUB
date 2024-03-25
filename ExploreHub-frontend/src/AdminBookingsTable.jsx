import React from 'react';
import Navbar from './Component/Navbar';

const AdminBookingsTable = ({ bookings }) => {
  return (
    <>
    <Navbar />

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full mt-10 text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border">
          <tr>
            <th scope="col" className="p-4">
              {/* Checkbox header */}
            </th>
            <th scope="col" className="px-6 py-3">
              First Name
            </th>
            <th scope="col" className="px-6 py-3">
              Last Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Accommodation Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id} className="bg-white border-b">
              <td className="w-4 p-4">
                {/* Checkbox */}
              </td>
              <td className="px-6 py-4">{booking.firstName}</td>
              <td className="px-6 py-4">{booking.lastName}</td>
              <td className="px-6 py-4">{booking.email}</td>
              <td className="px-6 py-4">{booking.country}</td>
              <td className="px-6 py-4">{booking.phoneNumber}</td>
              <td className="px-6 py-4">{booking.date}</td>
              <td className="px-6 py-4">{booking.accommodationName}</td>
              <td className="px-6 py-4">${booking.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    </>
  );
};

export default AdminBookingsTable;
