import React from 'react';
import '../assets/Customers.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

  
  
  
    



function Customers() {
    var [isEdit, setIsEdit] = useState("");
    var [customers, setCustomers] = useState([]);
    var [customer, setCustomer] = useState([]);


// state value and a function to set that value    
    var [customer, setCustomer] = useState({});
    var [address, setAddress] = useState({});
    var [product, setProduct] = useState("");
    var [price, setPrice] = useState(-1);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newOrderData = await fetch("http://localhost:3000/customers/add", {
        method: "POST",
        body: JSON.stringify({product, price})
        })   
        let newCustomer = await newOrderData.json();
    
        console.log(newCustomer);
    }
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


    return (
        <div className="customers__page">
           <h1>This is the customers page assigned to anthony
               to practice routing
           </h1>
            <form onSubmit={handleSubmit}>
                <label>Product</label>
                <input type="text" onChange={e => setProduct(e.target.value)} />
                <label>Price</label>
                <input type="text" onChange={e => setPrice(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )}

export default Customers

{/* /* customers.map((customer, idx ) => (
                key={idx}>
                    {price}
) */ }