import React from 'react'
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';

export default function Profile() {

    const { username } = useParams();
    const [profile, setProfile] = useState(null)


  const getCard = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      
      const response = await axios.get(`https://first-backend-azsy.onrender.com/${username}`);
      setProfile(response.data)
      

    } catch (error) {
      console.log(error)
      
    }
  };

   

  return (
    <div>
      <h1>Profile Name</h1>
    </div>
  )
}
