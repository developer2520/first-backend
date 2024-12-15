import React from 'react';
import Sidebar from '../../sidebar/sidebar'
import './mycard.css'

export default function mycard() {
  return (
    <div className='myCard'>
        <Sidebar />
        <div>
            <h1>These are the cards that have been created by You</h1>
        </div>

        
      
    </div>
  )
}
