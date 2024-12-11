import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";

export default function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [Loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // If token is present, navigate to the home page
      navigate('/home');
    }
    }, [navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post('https://first-backend-azsy.onrender.com/users', {
        name,
        username,
        password,
      });
      setLoading(true)
      toast.success(response.data.message, {
        autoClose: 5000
      });

      setTimeout(() => {
        navigate("/signin")
      }, 5000)
     

    } catch (error) {
      setMessage(error.response?.data?.message || 'Error signing up');
      toast.error(error.response?.data?.message || 'Error signing up');
      setLoading(false)
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
          <button type="submit">{Loading ? <ClipLoader
          color='white'
          size={20}
          
          /> : "Sign Up"}</button>
        </form>
        
        <div className="links">
            <h5>Have an acocount?</h5>
            <Link to="/signin">Sign In</Link>


            </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
