import React, { useEffect, useState } from 'react';
import TransactionItem from './TransactionItem';
import Navbar from './Navbar';
import axios from 'axios';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios
      .get('http://localhost:3000/api/transactions/transactions')
      .then((response) => {
        // Set the fetched data to the state
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='bg-gray-100 h-screen'>
      <Navbar />
      <div className='container mx-auto p-6'>
        <div className='bg-white rounded-md p-6 shadow-md'>
          <h1 className='text-3xl font-bold mb-4 text-primary-color'>
            All Transactions
          </h1>

          {transactions.length === 0 ? (
            <div className='text-gray-700'>
              <h2 className='text-lg font-semibold mb-2'>
                No Transactions Yet
              </h2>
            </div>
          ) : (
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {transactions.map((transaction, index) => (
                <TransactionItem key={index} transaction={transaction} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
