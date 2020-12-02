import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/navigation.js';
import Home from './components/Home';
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';
import Login from './components/Login.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Axios from 'axios';


function App() {
  var [isEdit, setIsEdit] = useState("");
  var [customers, setCustomers] = useState([]);
  var [customer, setCustomer] = useState([]);

/* {
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
// state value and a function to set that value
  var [customer, setCustomer] = useState({});
  var [address, setAddress] = useState({});
  var [product, setProduct] = useState("");
  var [price, setPrice] = useState(-1);

// front-end consuming the back end and  pulling in data. 
  useEffect(() => {
    const getAllCustomers = async () => {
      let customersData = await fetch("http://localhost:3000/customers/")
      let c = await customersData.json();

      /* console.log(c); */

      setCustomers(c.data.customers)
    }

    getAllCustomers();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newOrderData = await fetch("http://localhost:3000/customers/add", {
      method: "POST",
      body: JSON.stringify({product, price})
    })   
    let newCustomer = await newOrderData.json();
  
    console.log(newCustomer);
  }


// fix this 
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Product</label>
        <input type="text" onChange={e => setProduct(e.target.value)} />
        <label>Price</label>
        <input type="text" onChange={e => setPrice(e.target.value)} />
        <input type="submit" />
      </form>
      {customers.map((customer, idx ) => {
        return(
          <div key={idx}>
            {price}
          </div>
        )
      })}
      <Contact />
    </div>

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
  );
}

export default App;
