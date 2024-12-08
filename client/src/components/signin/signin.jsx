import React from 'react'
import {Link} from 'react-router-dom'

export default function signup() {
  return (
    <div className="container">
        <div className="card">
            <h1>Sign In</h1>
            
            <input type="text" placeholder='Username' />
            <input type="password" name="" id="" placeholder='Password' />
            <button>Sign In</button>
            <Link to="/signup">Sign Up</Link>
        </div>
        
      
    </div>
  )
}
