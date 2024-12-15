import React from 'react'
import Sidebar from './../../sidebar/sidebar'
import { jwtDecode } from 'jwt-decode'

const token = localStorage.getItem('token')


    const decodedToken = jwtDecode(token)


const username = decodedToken.username;
const name = decodedToken.name


export default function account() {
  return (
    <div className='account-container'>
        <Sidebar />

        <div className="main-account">
            <h1>{name}</h1>
        </div>

      
    </div>
  )
}
