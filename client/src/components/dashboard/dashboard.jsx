import React, { useEffect, useState } from 'react';

function Dashboard() {
  // State to store the users
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  // To show loading state
  const [error, setError] = useState(null);  // To handle any errors

  // Fetch users when the component mounts
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('http://localhost:4000/users');  // Your backend API
        if (!response.ok) {
          throw new Error('Failed to fetch users');  // Throw an error if the response is not OK
        }
        const data = await response.json();  // Parse the response as JSON
        setUsers(data);  // Store users in state
      } catch (error) {
        setError(error.message);  // Handle errors
      } finally {
        setLoading(false);  // Stop loading spinner
      }
    };

    getUsers();
  }, []);  // Empty dependency array means this runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Display loading spinner or text while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>;  // Display error message if something goes wrong
  }

  return (
    <div className="App">
      <h1>Users List</h1>
      <div id="users-container">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
