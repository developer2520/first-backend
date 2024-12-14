import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { username } = useParams(); // Extract username from the URL
  const [profile, setProfile] = useState(null); // State to store profile data
  const [error, setError] = useState(null); // State to store errors
  const [loading, setLoading] = useState(false); // State for loading status

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        // Use the correct endpoint with dynamic username
        const response = await axios.get(`https://first-backend-azsy.onrender.com/users/${username}`);
        setProfile(response.data); // Set the fetched profile data
      } catch (error) {
        setError('Profile not found'); // Handle errors
        console.log(error);
      } finally {
        setLoading(false); // Reset loading state
      }
    };

    fetchProfile(); // Call the function when the component mounts
  }, [username]); // Dependency array with `username`

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!profile) return <h1>No Profile Data</h1>;

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>{profile.name}</h1>
      <img
        src={profile.profilePicture || 'https://via.placeholder.com/150'}
        alt="Profile"
        style={{ borderRadius: '50%', width: '150px', height: '150px' }}
      />
      <h3>{profile.jobTitle}</h3>
      <p>{profile.bio}</p>
      {profile.socialLinks && (
        <div>
          {profile.socialLinks.twitter && (
            <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )}
          <br />
          {profile.socialLinks.linkedin && (
            <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      )}
    </div>
  );
}
