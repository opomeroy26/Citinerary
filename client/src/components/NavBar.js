import React from 'react'

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
    </div>
  )
}

export default NavBar