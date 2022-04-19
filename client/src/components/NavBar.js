
import React from 'react'
import {NavLink} from "react-router-dom"

// Material UI/CSS Imports
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';



function NavBar({ user, setUser }) {
  
  function handleLogoutClick() {
    fetch ("/logout", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="text.primary">Citinerary</Typography>
      <Link underline="hover" color="inherit" href="/home">
        Home
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/profile"
      >
        Profile
      </Link>
      <Link
        color="inherit"
        underline="hover"
        href="/myActivities"
      >My Activities</Link>
      <Link
        color="inherit"
        underline="hover"
        href="/addActivity"
      >Add Activity</Link>
      <button onClick={handleLogoutClick}> Logout </button>
</Breadcrumbs>
  )
}

export default NavBar