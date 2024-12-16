import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'
import { jwtDecode } from 'jwt-decode'

export default function sidebar() {



    const token = localStorage.getItem('token')

    const DecodedToken = jwtDecode(token)

    const username = DecodedToken.username;
    const name = DecodedToken.name;
  return (
    <div className='sidebar'>
        <div className="logo">
            <h1>Cardly</h1>
        </div>
        <div className="nav">
            <div className="link">
                <Link to="/home">My Cards</Link>
            </div>
            <div className="link">
                <Link>Marketplace</Link>
            </div>
            <div className="link">
                <Link>Analytics</Link>
            </div>
            <div className="link">
                <Link>Settings</Link>
            </div>
            <div className="link">
                <Link to='/account'>Account</Link>
            </div>
        </div>
      
    </div>
  )
}
