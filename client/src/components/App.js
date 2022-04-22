import '../App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ActivityContainer from './ActivityContainer';
import SignIn from "./SignIn";
import SignUp from './SignUp';
import Header from './Header';
import Profile from './Profile';
import AddActivity from './AddActivity';

// MUI CSS
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveIcon from '@mui/icons-material/Remove';

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
    const newMyActivities = activities.map(activity1 => activity1.id === activity.id ? activity : activity1);
    console.log(newMyActivities)
      fetch(`http://localhost:3000/activities/${activity.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(activity)
      })
      .then (response => response.json())
      .then(() => setActivities(newMyActivities))
    }

    function handleRemoveMyActivities(activity) {
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
        .then(() => setActivities(newMyActivities))
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

    // Footer
    function Footer() {
      return (
        <>
          <Typography variant="body2" color="text.secondary">
            Olivia Pomeroy 
            {" "}
            <Link color="inherit" href="https://github.com/opomeroy26">
              <GitHubIcon/>
            </Link>{' '}
            {"   |   "}
            Hannah Glazier
            {" "}
            <Link color="inherit" href="https://github.com/HannahGlazier">
            <GitHubIcon/>
            </Link>{' '}
            <br></br>
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </>
      );
    }


  return (
    <div className="App">
      <Header user ={user} setUser={setUser}
      /> 
      <Switch>
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
            handleRemoveMyActivities={handleRemoveMyActivities}
            faveActivities={faveActivities}
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


      <br></br>
      <br></br>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
        <Container className="footer" maxWidth="sm">
          <Typography variant="body2" color="text.secondary" >
            -Developed By- 
          </Typography>
          <Footer />
        </Container>
      </Box>
    </div>
  );
}

export default App;
