import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const TransactionForm = () => {
  const navigate = useNavigate();
  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [amount, setAmount] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedSender, setSelectedSender] = useState(null);
  const [selectedReceiver, setSelectedReceiver] = useState(null);

  // toast
  const notify = () =>
    toast.success('Transaction Completed', {
      autoClose: 3000,
      closeOnClick: true,
      theme: 'colored',
    });

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (senderId) {
      fetchUserDetails(senderId, setSelectedSender);
    } else {
      setSelectedSender(null);
    }
  }, [senderId]);

  useEffect(() => {
    if (receiverId) {
      fetchUserDetails(receiverId, setSelectedReceiver);
    } else {
      setSelectedReceiver(null);
    }
  }, [receiverId]);

  const fetchUsers = () => {
    axios
      .get('http://localhost:3000/api/users/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  const fetchUserDetails = (userId, setSelectedUser) => {
    axios
      .get(`http://localhost:3000/api/users/users/${userId}`)
      .then((response) => {
        setSelectedUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  };

  const handleTransaction = async (e) => {
    e.preventDefault();

    // Additional validation
    if (senderId === receiverId) {
      toast.error('Cannot send to the same person.');
      return;
    }

    if (!amount || Number(amount) <= 0) {
      toast.error('Amount must be greater than 0.');
      return;
    }

    if (amount > selectedSender.balance) {
      toast.error('Insufficient Amount');
      return;
    }

    try {
      await axios.post('http://localhost:3000/api/transactions/transaction', {
        sender: senderId,
        receiver: receiverId,
        amount: Number(amount),
      });

      notify();
      // navigate('/customers');
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='bg-background-50 h-screen'>
        <div className='container mx-auto p-4 text-text-900'>
          <h2 className='text-primary-color-2xl font-bold mb-4'>Send Money</h2>
          <form onSubmit={handleTransaction} className='space-y-4'>
            {/* Sender Section */}
            <div>
              <label className='block mb-2'>
                Sender ID:
                <select
                  value={senderId}
                  onChange={(e) => setSenderId(e.target.value)}
                  className='border p-2 rounded w-full'
                >
                  <option value=''>Select Sender</option>
                  {users.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.accountNumber} - {user.firstName}
                    </option>
                  ))}
                </select>
                {selectedSender && (
                  <div className='mt-4 p-4 bg-white rounded shadow'>
                    <p className='text-lg text-text-500'>
                      Sender Balance: {selectedSender.balance}
                    </p>
                  </div>
                )}
              </label>
            </div>

            {/* Receiver Section */}
            <div>
              <label className='block mb-2'>
                Receiver ID:
                <select
                  value={receiverId}
                  onChange={(e) => setReceiverId(e.target.value)}
                  className='border p-2 rounded w-full'
                >
                  <option value=''>Select Receiver</option>
                  {users.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.accountNumber} - {user.firstName}
                    </option>
                  ))}
                </select>
                {selectedReceiver && (
                  <div className='mt-4 p-4 bg-white rounded shadow'>
                    <p className='text-lg text-text-500'>
                      Receiver Balance: {selectedReceiver.balance}
                    </p>
                  </div>
                )}
              </label>
            </div>

            {/* Amount Section */}
            <div>
              <label className='block mb-2'>
                Amount:
                <input
                  type='number'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className='border p-2 rounded w-full'
                />
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type='submit'
                className='bg-primary-color-500 text-text-900 px-4 py-2 rounded hover:bg-primary-color-600 shadow-md w-full'
              >
                Send Money
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
