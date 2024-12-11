import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'  // Corrected import

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setError('No token found, please log in again');
      navigate('/signin');
      return;  // Exit early if token is not found
    }

    try {
      const decodedToken = jwtDecode(token);  // Decode inside useEffect
      setUser({
        name: decodedToken.name,
        username: decodedToken.username,
      });
      console.log(decodedToken)
      setLoading(false)
    } catch (error) {
      setError('Invalid token');
      navigate('/signin');
    }
  }, [token, navigate]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const response = await fetch('http://localhost:4000/users');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch users');
  //       }
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getUsers();
  // }, [token, navigate]);

  // If still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/signin');  // Redirect to signin after logout
  };

  return (
    <div className="App">
      <h1>Hello, Welcome to Home Page!</h1>
      <button onClick={Logout}>Log Out</button>

      {user && <h1>{user.id}</h1>} {/* Check if user data exists before rendering */}
    </div>
  );
}

export default Home;
