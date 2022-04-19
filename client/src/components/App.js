import '../App.css';
import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ActivityContainer from './ActivityContainer';
import NavBar from './NavBar';
import SignIn from "./SignIn";
import SignUp from './SignUp';
import Header from './Header';
import Profile from './Profile';
import AddActivity from './AddActivity';
import MyActivities from './MyActivities';


function App() {

  // State
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState('default');
  const [filterBy, setFilterBy] = useState('default');

  // const [errors, setErrors] = useState([]);

  // Fetches

  // Fetch All Activities
  useEffect(() => {
    fetch('http://localhost:3000/activities')
    .then(response => response.json())
    .then(activities => setActivities(activities))
  }, [])

  // Fetch Searched Activities
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
      } else {
        r.json().then(err => window.alert(err.errors))
      }
    });
  }, []);

  if (!user) return <SignIn onSignIn={setUser} /> 


// Sort
const sortedActivities = activities
.sort((a1, a2) => {
  if (sortBy === 'default'){
    return a1.id - a2.id
    } else if (sortBy === 'name') {
      return a1.name.localeCompare(a2.name)
    } else {
      return a1.duration - a2.duration
    }
})

// Filter Location
// const filteredActivities = sortedActivities.filter(
//   (activity) => activity.location.city === filterBy
// )

const filteredActivities = sortedActivities.filter((activity) => {
  if (filterBy === 'default') {
    return sortedActivities 
  } else {
    return activity.location.city === filterBy
  }
})

  function handleUpdateUser(updatedUser) {
    console.log("updating user", updatedUser)
    setUser(updatedUser)
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
          <ActivityContainer 
          activities={filteredActivities}
          sortBy={sortBy} 
          setSortBy={setSortBy}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          />
        </Route>
        <Route exact path = "/myActivities">
          <MyActivities />
        </Route>
        <Route exact path = "/addActivity">
          <AddActivity />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
