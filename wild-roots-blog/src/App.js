import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
import Customers from './components/Customers';
import Scripture from './components/Scripture';
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
          <Route path="/scripture">
            <Navigation/>
            <Scripture/>
            <h1>Scripture Page</h1>
          </Route>
          <Route path="/contact-us">
            <Navigation/>
            <Contact/>
          </Route>
          <Route path="/login">
            <Navigation/>
            <Login/>
            <h1>Login page</h1>
          </Route>
          <Route path="/customers">
            <Navigation/>
            <Customers/>
          </Route>
        </Switch>
      </div>
    </Router>
        );
}

export default App;

          
          

    
