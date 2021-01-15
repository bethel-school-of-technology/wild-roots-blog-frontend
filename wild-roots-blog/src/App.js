import React, { useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import './style.css';
// import Axios from 'axios';
import Home from './components/Home';
import Gardening from './components/Gardening';
import Cooking from './components/Cooking';
import LocalBusiness from './components/LocalBusiness';
import Scripture from './components/Scripture';
import Contact from './components/Contact';
import Header from './components/layout/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// import AuthOptions from './components/auth/AuthOptions';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Recipie from './components/Recipie';
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
    <BrowserRouter>
  
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
   
    </BrowserRouter>
    
        );
}

export default App;

