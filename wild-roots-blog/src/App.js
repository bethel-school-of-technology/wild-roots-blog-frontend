<<<<<<< HEAD
import React, { useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/navigation';
import './style.css';
import Axios from 'axios';
=======
import React from 'react';
import Navigation from './components/navigation';
// import Axios from 'axios';
>>>>>>> 07018378c0121824a5eed63c4d8753a63f924137
import Home from './components/Home';
import Gardening from './components/Gardening';
import Cooking from './components/Cooking';
import LocalBusiness from './components/LocalBusiness';
import Scripture from './components/Scripture';
import Contact from './components/Contact';
import Recipie from './components/Recipie';
import Header from './components/layout/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
<<<<<<< HEAD
import AuthOptions from './components/auth/AuthOptions'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Recipie from './components/Recipie';
=======
import './App.css';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Recipie from './components/Recipie';


>>>>>>> 07018378c0121824a5eed63c4d8753a63f924137
// import UserContext from './context/UserContext';

function App() {

  // const UserContext = createContext();

  // //updates currently logged in users data.
  // const [userData, setUserData] = useState({
  //   token: undefined,
  //   user: undefined
  // });

  //useEffect only runs once when app starts since there are no dependencies
  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     let token = localStorage.getItem('auth-token');
  //     if (token === null) {
  //       localStorage.setItem("auth-token", "");
  //       token = "";
  //     }
  //     const tokenRes = await Axios.post('http://localhost:3001/users/tokenIsValid', null, {headers: { 'x-auth-token': token }});
  //     console.log(tokenRes.data);

  //     if (tokenRes.data) {
  //       const userRes = await Axios.get('http://localhost:3001/users', {headers: { 'x-auth-token': token },});
  //       setUserData({
  //         token,
  //         user: userRes.data,
  //       });
  //     }
  //   };

  //   checkLoggedIn();
  // }, []);
  
  return (
    //BEM
<<<<<<< HEAD
    <BrowserRouter>
  
=======
    <Router>
    {/* <UserContext.Provider value={{userData, setUserData}}> */}
>>>>>>> 07018378c0121824a5eed63c4d8753a63f924137
    <Router>
      <div className="app">
        <div>
          <Navigation />
        </div>
        <div className="app__body">
        {/* <UserContext.Provider value={{ userData, setUserData }}> */}
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/gardening">
              <Gardening />
            </Route>
            <Route path="/cooking">
              <Cooking />
            </Route>
            <Route path="/recipies">
              <Recipie />
            </Route>
            <Route path="/local-business">
              <LocalBusiness />
            </Route>
            <Route path="/scripture">
              <Scripture />
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
          {/* </UserContext.Provider> */}
        </div>
      </div>
    </Router>
<<<<<<< HEAD
   
    </BrowserRouter>
=======
    {/* </UserContext.Provider> */}
    </Router>
>>>>>>> 07018378c0121824a5eed63c4d8753a63f924137
    
        );
}

export default App;

