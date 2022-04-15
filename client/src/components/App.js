import '../App.css';
import { Route, Switch } from "react-router-dom";
import ActivityContainer from './ActivityCard';
import NavBar from './NavBar';
import SignIn from "./SignIn";
import SignUp from './SignUp';
import Header from './Header';
import Profile from './Profile';


function App() {
  return (
    <div className="App">
      <Header /> 
      <NavBar />
      <Switch>
        <Route exact path = "/">
          <SignIn/>
        </Route>
        <Route exact path = "/signup">
          <SignUp/>
        </Route>
        <Route exact path = "/profile">
          <Profile />
        </Route>
        <Route exact path = "/home">
          <ActivityContainer />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
