import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = () => {
    if (!name || !email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    } else {
      navigate('/Forms');
    }

    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    setErrorMessage('');
    alert('Registration successful!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        <h1 className="text-2xl font-semibold mb-4">Registration Page</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2
            w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            onClick={handleRegistration}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      </div>
    );
  };
  
  export default RegistrationPage;
  