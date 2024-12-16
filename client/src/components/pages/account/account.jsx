import React from 'react'
import Sidebar from './../../sidebar/sidebar'
import { jwtDecode } from 'jwt-decode'
import {useNavigate} from 'react-router-dom'
import './account.css'



export default function account() {

  const navigate = useNavigate()

  const token = localStorage.getItem('token')


    const decodedToken = jwtDecode(token)


const username = decodedToken.username;
const name = decodedToken.name;


const Logout = () => {
  localStorage.removeItem('token')
}

if (!token) {
  navigate('signin')
}



  return (
    <div className='account-container'>
        <Sidebar />

        <div className="main-account">
            <h1>This is your account</h1>
            <button onClick={Logout}>Logout</button>
        </div>

      
    </div>
  )
}
