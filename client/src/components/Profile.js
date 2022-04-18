import React, {useState} from 'react'
import Button from '@mui/material/Button';
import EditProfile from './EditProfile';

function Profile({user}) {
  const [showForm, setShowForm] = useState(true)
  
  return (
    <div>
      <h1> Profile Page</h1>
      {showForm ? (
        <div>
        <img alt={user.username} src={user.profile_picture}/>
        <h2>{user.username}</h2>
        <p>{user.age} years old</p>
        <Button onClick={()=> setShowForm(false)}>
          Edit Profile
        </Button>
        </div>
      ) : (
        <div>
        <EditProfile user = {user}/>
        <Button onClick={()=> setShowForm(true)}>
          Cancel Changes
        </Button>
       </div>
      )}
      </div>

    )}

export default Profile