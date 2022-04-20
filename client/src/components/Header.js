import React from 'react'

function Header({user}) {
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  return (
    <div>
      <h3>Welcome {user.username} ! </h3> 
      <h5>{date} </h5>
    </div>
  )
}

export default Header;
