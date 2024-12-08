import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      const response = await axios.post('http://localhost:4000/users', {
        name,       // Pass name to backend
        username,   // Pass username to backend
        password,   // Pass password to backend
      });

      setMessage(response.data.message); // Show success message
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error signing up'); // Show error message
    }
  };

  return (
    <div className='container'>
      <div className="card">
        <h1>Sign Up</h1>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <p>{message}</p> {/* Display success or error message */}
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
}
