import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';
import Home from './components/home/home';
import LandingPage from './components/landingPage/landingPage'
import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Sidebar from './components/sidebar/sidebar'
import Mycard from './components/pages/mycardPage/mycard'
import Account from './components/pages/account/account'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <BrowserRouter>
      
        <Routes>
         
          <Route exact path="/" Component={LandingPage} />

         
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path='landing' element={<LandingPage />}/>
          <Route path=":username" Component={Profile} />
          <Route path='/sidebar' Component={Sidebar} />  
          <Route path='/mycards' Component={Mycard} />
          <Route path='/account' Component={Account}
             </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
