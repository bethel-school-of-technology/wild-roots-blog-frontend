import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';

import Home from './components/Home';
import Gardening from './components/Gardening';
import Cooking from './components/Cooking';
import LocalBusiness from './components/LocalBusiness';
import Scripture from './components/Scripture';
import Contact from './components/Contact';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Recipie from './components/Recipie';

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <div>
          <Navigation />
        </div>
        <div className="app__body">
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
            <Route path="/recipie">
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
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
        );
}

export default App;

