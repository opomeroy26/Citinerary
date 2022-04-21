import React, {useState} from 'react'
import Button from '@mui/material/Button';
import EditProfile from './EditProfile';
import EditIcon from '@mui/icons-material/Edit';
import { Breadcrumbs } from '@mui/material';
import { Typography } from '@mui/material';


function Profile({user, onUpdateUser}) {
  const [showForm, setShowForm] = useState(true)
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  

  
  return (
    <div>
      {showForm ? (
        <div>
        <img id = "profile_image" alt={user.username} src={user.profile_picture}/>
        <h5 id="profile_name" >{user.username}</h5>
        <p id="profile_age">{user.age} years old</p>
        <p id="profile_age">Today's date is {date}</p>
        <EditIcon onClick={()=> setShowForm(false)}/>
        </div>
      ) : (
        <div>
        <EditProfile user = {user} onUpdateUser= {onUpdateUser} setShowFormn ={setShowForm}/>
        <Button onClick={()=> setShowForm(true)}>
          Cancel Changes
        </Button>
       </div>
      )}
      </div>

    )}

export default Profile