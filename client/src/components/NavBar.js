import React from 'react'
import {NavLink} from "react-router-dom"


function NavBar({user, setUser}) {

  function handleLogoutClick() {
    fetch ("/logout", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  
  return (
    <div>
    <h2>NavBar</h2>
    <button onClick={handleLogoutClick}> Logout </button>
    <NavLink to="/profile">Profile</NavLink>
    </div>
  )
}

export default NavBar