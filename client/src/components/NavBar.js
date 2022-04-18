
import React from 'react'

// Material UI/CSS Imports
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


function NavBar() {
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
</Breadcrumbs>
  )
}

export default NavBar