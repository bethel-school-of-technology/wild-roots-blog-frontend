import React, { useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import './style.css';

import Home from './components/Home';
import Gardening from './components/Gardening';
import Cooking from './components/Cooking';
import LocalBusiness from './components/LocalBusiness';
import Scripture from './components/Scripture';
import Contact from './components/Contact';
import Header from './components/layout/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// import Recipie from './components/Recipie';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Recipie from './components/Recipie';

function App() {
  
  return (
    //BEM
    <BrowserRouter>
    <Router>
     
      <div className="app">
        <div>
          <Navigation />
        </div>
        <div className="app__body">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
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
        </div>
      </div>
    </Router>
    </BrowserRouter>
    
        );
}

export default App;

