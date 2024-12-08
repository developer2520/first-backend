import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/signup/signup'
import Signin from './components/signin/signin'
import Dashboard from './components/dashboard/dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>  
      <Route path='/dashboard' element={<Dashboard />}     />
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
