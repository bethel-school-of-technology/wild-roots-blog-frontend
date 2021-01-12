import React, { useState, useEffect } from 'react';
// @material-Ui
import FormControl from '@material-ui/core/FormControl';
import { FormHelperText, Input, InputLabel, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

import axios from 'axios';

import '../assets/Recipie.css';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: green['A100'],
    },
}));

function Recipie() {
    const color = useStyles();
    const [email, setEmail] = useState({});
    const [recipie, setRecipie] = useState({});
    const [meaning, setMeaning] = useState({});
    const [message, setMessage] = useState([{email: email}, {recipie: recipie}, {meaning: meaning}]);
    
    useEffect( () => {
        fetch('http://localhost:3000/cooking/addRecipie')
    }, [])

     const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/cooking/addRecipie")
        .then((res) => {
            if(res.data.status === "success") {
                alert('dataReceived way to go!')
                resetForm();
            } else if (res.data.status === "fail") {
                alert('fail')
            }
        })
    }

    const resetForm = () => {
        setMessage([message]);
            
    }

    const onChangeEmail = (e) => {
        setEmail({email: e.target.email})
    }
    const onChangeRecipie = (e) => {
        setRecipie({RecipieName: e.target.value})
    }
    const onChangeMeaning= (e) => {
        setMeaning({Meaning: e.target.value})
    }

    return (
        <div className="recipie">
            <FormControl onClick={handleSubmit} >
                <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input onChange={onChangeEmail} id="my-input" aria-describedby="my-helper-text" />
                 <InputLabel htmlFor="my-input"></InputLabel>
                     <Input onChange={onChangeRecipie} placeholder="Recipie Name" id="my-input" aria-describedby="my-helper-text"/>
                <InputLabel htmlFor="my-input"></InputLabel>
                     <Input onChange={onChangeMeaning} placeholder="Why it's your favorite"/>
                 <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                     <Button type="submit" variant="outlined" className={color.button}>Click to Share!</Button>
             </FormControl>
            
        </div>
    )
}

export default Recipie

