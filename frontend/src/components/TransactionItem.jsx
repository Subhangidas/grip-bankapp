import React from 'react';

const TransactionItem = ({ transaction }) => {
  const { sender, receiver, amount, timestamp } = transaction;

  return (
    <div className='bg-white rounded-md p-4 shadow-md'>
      <h2 className='text-lg font-semibold mb-2'>
        Transaction ID: {transaction._id}
      </h2>
      <div className='mb-2'>
        <strong>Sender:</strong> (Account No: {sender.accountNumber})
      </div>
      <div className='mb-2'>
        <strong>Receiver:</strong>
        (Account No: {receiver.accountNumber})
      </div>
      <div className='mb-2'>
        <strong>Amount:</strong> {amount}
      </div>
      <div className='mb-2'>
        <strong>Date:</strong>{' '}
        {new Date(timestamp).toLocaleString().split(',')[0]}
      </div>
    </div>
  );
};

export default TransactionItem;
