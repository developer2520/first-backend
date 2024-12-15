import React from 'react'
import Navbar from '../navbar/navbar'
import {useNavigate} from 'react-router-dom'

export default function landingPage() {
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  console.log(token)

  if (token) {
    navigate('/home')
  }
  return (
    <div>
        <Navbar />
      <h1>This is landing page</h1>
    </div>
  )
}
