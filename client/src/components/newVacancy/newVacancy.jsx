import React from 'react'

export default function newVacancy() {
  return (
    <div className='main-card'>
        <h1>Create a new vacancy</h1>
        <h6>Fill the form</h6>
        <form action="">
            <input type="text" placeholder='Job title'/>
            <input type="" placeholder='description' />
            <input type="text" placeholder='salary' />
            <input type="text" placeholder='company'/>
            <input type="option" />

            <button>
              Create a vacancy
            </button>
        </form>
      
    </div>
  )
}
