import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

export default function navbar() {
  return (
    <div className='navbar'>
        <div className="logo"><h1>Cardly</h1></div>
        <div className="navbar_links">
        <Link to="/signin">Sign in</Link>
        <Link to="signup">Sign up</Link>


        </div>
    
    </div>
  )
}
