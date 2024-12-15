import React from 'react'
import {Link} from 'react-router-dom'

export default function sidebar() {
  return (
    <div className='sidebar'>
        <div className="logo">
            <h1>Cardly</h1>
        </div>
        <div className="nav">
            <div className="link">
                <Link>My Links</Link>
            </div>
            <div className="link">
                <Link>My Links</Link>
            </div>
            <div className="link">
                <Link>My Links</Link>
            </div>
            <div className="link">
                <Link>My Links</Link>
            </div>
            <div className="link">
                <Link>My Links</Link>
            </div>
        </div>
      
    </div>
  )
}
