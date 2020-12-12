import React from 'react';
import '../assets/Customers.css';
import { useState } from 'react';

  
  
  
    



function Customers() {
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