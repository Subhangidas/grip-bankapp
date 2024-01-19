// components/CustomerCard.js
import React from 'react';

const CustomerCard = ({ name }) => {
  return (
    <div className='bg-white p-6 rounded shadow-md'>
      <h3 className='text-lg font-semibold mb-2'>{name}</h3>
      <p className='text-gray-600'>A satisfied customer</p>
    </div>
  );
};

export default CustomerCard;
