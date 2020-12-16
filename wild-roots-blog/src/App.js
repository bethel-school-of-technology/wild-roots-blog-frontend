import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
import Customers from './components/Customers';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
    /* Makes sure default route is always at the bottom
    or else it won't get picked up or just write exact */
          <Route exact path="/">
            <Navigation/>
              <h1>Default Home Page</h1>
          </Route>
          <Route path="/home">
            <Navigation/>
            <Home/>
            <h1>I am a Home page welcome home!</h1>
          </Route>
          <Route path="/about">
            <Navigation/>
            <About/>
          </Route>
          <Route path="/blog">
            <Navigation/>
              <Blog/>
            <h1>I am a Blog Page can't wait to hear your stories!</h1>
          </Route>
          <Route path="/contact-us">
            <Navigation/>
            <Contact/>
            <h1>contact Page</h1>
          </Route>
          <Route path="/login">
            <Navigation/>
            <Login/>
            <h1>Login page</h1>
          </Route>
          <Route>
            <Navigation/>
            <Customers/>
          </Route>
        </Switch>
      </div>
    </Router>
        );
}

export default App;


/*//BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Navigation/>
            <Home/>
            <h1>I am a Home page welcome home!</h1>
          </Route>
          <Route path="/blog">
            <Navigation/>
            <Blog/>
            <h1>I am a Blog Page can't wait to hear your stories!</h1>
          </Route>
          <Route path="/contact-us">
          <Navigation/>
          <Contact/>
            <h1>contact Page</h1>
          </Route>
          <Route path="/login">
          <Navigation/>
          <Login/>
            <h1>Login page</h1>
          </Route>
          /* Makes sure default route is always at the bottom
          or else it won't get picked up */
          /*<Route path="/">
            <Navigation/>
            <h1>Default Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>*/

    /* { mock data
"customer": {
    "firstName": "Sonya",
    "lastName": "Styles",
    "email": "123style@style"
},
"product": {
    "name": "Macbook Pro",
    "store": "4Corners Fitness",
    "price": 2050
},
"address": {
    "mailingOne": "N/a",
    "mailingTwo": "N/a",
    "city": "Denver",
    "state": "Colorado",
    "zip": 99393
}} */