import React from 'react'
import Sidebar from './../../sidebar/sidebar'
import { jwtDecode } from 'jwt-decode'
import './account.css'



export default function account() {

  const token = localStorage.getItem('token')


    const decodedToken = jwtDecode(token)


const username = decodedToken.username;
const name = decodedToken.name;


const Logout = () => {
  localStorage.removeItem('token')
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
