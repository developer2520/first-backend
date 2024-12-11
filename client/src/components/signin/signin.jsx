import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      // Make the API call
      const response = await axios.post('https://first-backend-azsy.onrender.com/signin', {
        username,
        password,
      });
      

      // Store the token in localStorage
      const token = response.data.token;
      localStorage.setItem('token', token);

      // Navigate to '/home' after successful sign-in
      if (token) {
        navigate('/home');
      }
    } catch (error) {
      // Handle and display error
      console.error("Sign-in error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Sign-in failed");
      setLoading(false)
    }
  };

  // This useEffect runs only after component mounts and checks if the token exists in localStorage.
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, redirect to home page without showing the sign-in page
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div className="container">
      <div className="card">
        <h1>Sign In</h1>
        <form onSubmit={handleSignin}>
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
          <button type="submit">{Loading ? <ClipLoader
          color='white'
          size={20}
          
          /> : "Sign In"}</button>
        </form>
        <div className="links">
          <h5>Don't have an account?</h5>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
