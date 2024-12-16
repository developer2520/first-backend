import React, { useEffect, useState } from 'react';
import Sidebar from './../../sidebar/sidebar';
import {jwtDecode} from 'jwt-decode'; // Fix the import, no curly braces needed
import { useNavigate } from 'react-router-dom';
import './account.css';

export default function Account() {
  const navigate = useNavigate();

  // Use state to track the token
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Decode the token if it exists
  let username = '';
  let name = '';
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      username = decodedToken.username;
      name = decodedToken.name;
    } catch (error) {
      console.error('Invalid token:', error);
      setToken(null); // If decoding fails, log out the user
    }
  }

  // Logout function
  const Logout = () => {
    localStorage.removeItem('token');
    setToken(null); // Trigger state update and re-render
  };

  // Redirect to signin if no token
  useEffect(() => {
    if (!token) {
      navigate('/signin'); // Redirect to the signin page
    }
  }, [token, navigate]); // Effect runs whenever token changes

  return (
    <div className='account-container'>
      <Sidebar />

      <div className="main-account">
        <h1>Welcome, {name || 'User'}!</h1>
        <p>Username: {username || 'N/A'}</p>
        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  );
}
