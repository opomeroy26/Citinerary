import '../App.css';
import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ActivityContainer from './ActivityContainer';
import NavBar from './NavBar';
import SignIn from "./SignIn";
import SignUp from './SignUp';
import Header from './Header';
import Profile from './Profile';


function App() {

  // State
  const [activities, setActivities] = useState([])
  const [user, setUser] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  // Filter/Search URL
  const currentUrl = new URLSearchParams(window.location.search)
  const searchParam = currentUrl.get('location')
  
  let url = 'http://localhost:3000/activities'
  if (searchParam){
    url = `${url}/?name=${searchParam}`
  }

  // Fetches
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(activities => setActivities(activities))
  }, [url])
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, []);

  if (!user) return <SignIn onSignIn={setUser} /> 

  function handleUpdateUser(updatedUser) {
    console.log("updating user", updatedUser)
    // setUser(updatedUser)
  }


  return (
    <div className="App">
      <Header /> 
      <NavBar user ={user} setUser={setUser}/>
      <Switch>
        {/* Will need to comment below SignIn out and uncomment the if statement above once auth is finished */}
        {/* <Route exact path = "/"> 
          <SignIn onSignIn={setUser}/> */}
        {/* </Route> */}
        <Route exact path = "/signup#">
          <SignUp/>
        </Route>
        <Route exact path = "/profile">
          <Profile 
            user = {user}
            onUpdateUser = {handleUpdateUser}/>
        </Route>
        <Route exact path = "/home"> 
        {/* exact path = "/" ? */}
          <ActivityContainer activities={activities} />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
