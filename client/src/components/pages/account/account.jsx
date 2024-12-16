import React, { useEffect, useState } from 'react';
import Sidebar from './../../sidebar/sidebar';
import jwtDecode from 'jwt-decode'; // Correct import
import { useNavigate } from 'react-router-dom';
import './account.css';

export default function Account() {
  const navigate = useNavigate();

  // Use state to track the token
  const [token, setToken] = useState(localStorage.getItem('token') || ''); // Ensure token is a string

  // Decode the token if it exists and is valid
  const [userDetails, setUserDetails] = useState({ username: '', name: '' });

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Decode the token
        setUserDetails({
          username: decodedToken.username || 'Unknown',
          name: decodedToken.name || 'User',
        });
      } catch (error) {
        console.error('Invalid token:', error);
        setToken(''); // Reset token state if decoding fails
        localStorage.removeItem('token'); // Clear invalid token from storage
      }
    } else {
      // Redirect to signin if no token
      navigate('/signin');
    }
  }, [token, navigate]);

  // Logout function
  const Logout = () => {
    localStorage.removeItem('token');
    setToken(''); // Trigger state update and re-render
  };

  return (
    <div className="account-container">
      <Sidebar />

      <div className="main-account">
        <h1>Welcome, {userDetails.name}!</h1>
        <p>Username: {userDetails.username}</p>
        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  );
}
