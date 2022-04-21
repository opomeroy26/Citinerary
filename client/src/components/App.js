import '../App.css';
import { Route, Switch, useHistory } from "react-router-dom";
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
  const [myActivities, setMyActivities] = useState('default');
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState('default');
  const [filterBy, setFilterBy] = useState('default');
  // const [errors, setErrors] = useState([]);
  const [like, setLike] = useState(false)
  
  const history = useHistory()

  // const [errors, setErrors] = useState([]);

  // console.log(activities)

  // Fetches

  // Fetch - All Activities
  useEffect(() => {
    fetch('http://localhost:3000/activities')
    .then(response => response.json())
    .then(activities => setActivities(activities))
  }, [])

  // Fetch - Searched Activities
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

  // Fetch - DELETE Activity
  function handleDeleteActivity(activity){
    fetch(`http://localhost:3000/activities/${activity.id}`, { method: 'DELETE' })
    const newActivities = activities.filter( individualActivity => individualActivity !== activity)
    setActivities(newActivities)
    // console.log(activity)
  }


  function handleAddMyActivities(activity) {
    const newMyActivities = activities.filter (activity => activity.like === true)
    console.log(newMyActivities)
      fetch(`http://localhost:3000/activities/${activity.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(activity)
      })
      .then (response => response.json())
      .then(() => setMyActivities(newMyActivities))
      // .then(setMyActivities([...myActivities, newMyActivities]))
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
const filteredActivities = sortedActivities.filter((activity) => {
  if (filterBy === 'default') {
    return sortedActivities 
  } else if (filterBy === 'my activities') {
    return activity.like === true
  } else {
    return activity.location.city === filterBy
  }
})

  // Show/Filter My Activities 
  const faveActivities = sortedActivities.filter((activity) => {
    return activity.like === true
  })

  function handleShowMyActivities(){
    setActivities(faveActivities)
  }

  // Update User
  function handleUpdateUser(updatedUser) {
    console.log("updating user", updatedUser)
    setUser(updatedUser)
  }

  // Add activity form 
  function handleAddToActivities(activityForm) {
    console.log(activityForm)
    setActivities([...activities, activityForm])
  }


    // Clear Search -- This can maybe be moved down a level to ActivityContainer, or refactored because the fetch is repeated
    function resetFetch(){
      fetch('http://localhost:3000/activities')
      .then(response => response.json())
      .then(activities => setActivities(activities))
    }

    function clearSearch(){
      setSearchTerm("")
      resetFetch()
    }

  return (
    <div className="App">
      <Header user ={user}
      /> 
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
            handleDeleteActivity={handleDeleteActivity}
            addMyActivities={handleAddMyActivities}
            clearSearch={clearSearch}
            handleShowActivities={handleShowMyActivities}
          />
        </Route>
        <Route exact path = "/myActivities">
          <MyActivities 
            activities={myActivities}
            sortBy={sortBy} 
            setSortBy={setSortBy}
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            handleDeleteActivity={handleDeleteActivity}
            addMyActivities={handleAddMyActivities}
            setMyActivities={setMyActivities}

          />
        </Route>
        <Route exact path = "/addActivity">
          <AddActivity
          activities = {activities}
          setActivities = {setActivities}
          onAddToActivities = {handleAddToActivities}
          user = {user} />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
