import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import your Navbar component here
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchCustomersThrottled = throttle(fetchCustomers, 1000);
    fetchCustomersThrottled();
  }, []);

  const fetchCustomers = () => {
    setIsFetching(true);
    axios
      .get('http://localhost:3000/api/users/users')
      .then((response) => {
        setCustomers(response.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.error('Error fetching customers:', error);
        setIsFetching(false);
      });
  };

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const closeModal = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className='bg-gray-100 h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Customer List */}
      <div className='container mx-auto p-4 text-gray-800'>
        <h1 className='text-3xl font-bold mb-8'>Customer List</h1>

        {/* List of Customers */}
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {customers.map((customer) => (
            <div
              key={customer._id}
              className='bg-white p-6 rounded shadow cursor-pointer hover:shadow-lg'
              onClick={() => handleCustomerClick(customer)}
            >
              <img
                src={`https://source.unsplash.com/random/300x200/?person,${customer.firstName}`}
                alt={`Customer ${customer.firstName}`}
                className='mb-4 rounded-md object-cover w-full h-32'
              />
              <h2 className='text-xl font-semibold mb-2'>
                {customer.firstName}
              </h2>
              <p className='text-sm text-gray-500'>{customer.email}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCustomer && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-8 rounded-lg'>
              <h2 className='text-2xl font-semibold mb-4'>
                {selectedCustomer.name}
              </h2>
              <img
                src={`https://source.unsplash.com/random/300x200/?person,${selectedCustomer.firstName}`}
                alt={`Customer ${selectedCustomer.firstName}`}
                className='mb-4 rounded-md object-cover w-full h-32'
              />
              <p className='text-sm text-gray-700'>
                Email: {selectedCustomer.email}
              </p>
              <p className='text-sm text-gray-700'>
                Account Balance: {selectedCustomer.balance}
              </p>
              <p className='text-sm text-gray-700'>
                Account Number: {selectedCustomer.accountNumber}
              </p>
              <button
                onClick={closeModal}
                className='mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerList;
