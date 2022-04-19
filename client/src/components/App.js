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
  const [sortBy, setSortBy] = useState('default')

  // Filter/Search URL
  // const currentUrl = new URLSearchParams(window.location.search)
  // const searchParam = currentUrl.get('location')
  
  // let url = 'http://localhost:3000/activities'
  // if (searchParam){
  //   url = `${url}/?name=${searchParam}`
  // }
  console.log(user)
  // Fetches
  useEffect(() => {
    fetch('http://localhost:3000/activities')
    .then(response => response.json())
    .then(activities => setActivities(activities))
  }, [])

  function handleSearch(e, searchTerm){
    e.preventDefault()
    fetch('/search', { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      }, body: JSON.stringify({name: searchTerm}),
    })
    .then(response => response.json())
    .then(activities => setActivities(activities))
  }
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, []);

  if (!user) return <SignIn onSignIn={setUser} /> 

// Sort
const sortedActivities = activities.sort((a1, a2) => {
  if (sortBy == 'default'){
    return a1.id - a2.id
    } else if (sortBy == 'name') {
      return a1.name.localeCompare(a2.name)
    } else if (sortBy == 'location') {
      return a1.location.city.localeCompare(a2.location.city)
    } else if (sortBy == 'duration') {
      return a1.duration.localeCompare(a2.duration)
    }
})

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
          <Profile user = {user}/>
        </Route>
        <Route exact path = "/home"> 
        {/* exact path = "/" ? */}
          <ActivityContainer 
          activities={sortedActivities}
          sortBy={sortBy} 
          setSortBy={setSortBy}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
