import React from 'react';
import axios from 'axios';

import '../assets/Recipie.css';

class Recipie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            email: '',
            recipieName: '',
            description: '',
        }
    }
    
    onNameChange(event) {
        this.setState({ firstName: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onRecipieChange(event) {
        this.setState({ recipieName: event.target.value })
    }
    onDescriptionChange(event) {
        this.setState({ description: event.target.value })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        axios({
            method: "POST",
            url: "http://localhost:3001/cooking/addRecipe",
            data: this.state
        }).then((response) => {
            console.log(response)
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
    resetForm() {
        this.setState({ firstName: '', email: '', recipieName: '', description: '' })
    }
    
    render() {
        return (
        
            <div className="form__recipie">
                <form className="form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form__group">
                        <input
                            className="form__input"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.onNameChange.bind(this)}
                            placeholder="FirstName"
                            />
                    </div><br/>
                    <div className="form__group">
                        <input
                            className="form__input"
                            type="email"
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                            placeholder="Email"
                            />
                    </div>
                    <br/>
                    <div className="form__group">
                        <input
                            className="form__input"
                            type="text"
                            aria-describedby="recipie"
                            value={this.state.recipieName}
                            onChange={this.onRecipieChange.bind(this)}
                            placeholder="Recipie Name"
                        />
                    </div>
                    <br/>
                    <div className="form__group">
                        <textarea
                            className="form__textArea"
                            rows="5"
                            value={this.state.description}
                            onChange={this.onDescriptionChange.bind(this)}
                            placeholder="What's meaningful about this recipie for you?"
                        />
                    </div>
                    <br/>
                    <div className="form__group">
                        <button
                        className="form__button"
                        type="submit"
                        >Click to Share with Us!
                        </button>
                    </div>
                </form>
            </div>
        
        );
    }
}

export default Recipie




////// coding graveyard /////////

// this.onNameChange = this.onNameChange.bind(this)
// this.onEmailChange = this.onEmailChange.bind(this)
// this.onRecipieChange = this.onRecipieChange.bind(this)
// this.onDescriptionChange = this.onDescriptionChange.bind(this)

// import React, { useState, useEffect } from 'react';
// // import { useForm , Controller } from 'react-hook-form';
// // @material-Ui
// import { FormGroup, FormHelperText, Input, InputLabel, makeStyles } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import TextField from '@material-ui/core/TextField';
// // import FormControl from '@material-ui/core/FormControl';
// // import TextField from '@material-ui/core/TextField';
// // import { green } from '@material-ui/core/colors';

// import axios from 'axios';

// // import useRecepieStyle from './RStyle';

// import { useStyles } from './Cooking';
// import '../assets/Recipie.css';


// // const useStyles = makeStyles((theme) => ({
// //     button: {
// //         backgroundColor: green['A100'],
// //     },
// // }));

// function Recipie() {
//     // const { control, errors: fieldsErrors } = useForm();
//     // button color
//     const classes = useStyles();
//     // set state
//     const [firstName, setFirstName] = useState("");
//     const [email, setEmail] = useState("");
//     const [recipie, setRecipie] = useState("");
//     const [meaning, setMeaning] = useState("");
//     const [message, setMessage] = useState({firstName: "" }, {email: ""}, {recipie: ""}, {meaning: ""});

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         let newRecipiesData = await fetch("http://localhost:3001/cooking/addRecipie"),{
//           method: "POST", 
//           headers: {
//             'Content-Type': 'application/json'
//           }}
//         .then((res)=>{
//           if (res.data.status === 'success') {
//             alert("Message Sent."); 
//             // message.resetForm()
//           } else if (res.data.status === 'fail') {
//             alert("Message failed to send.")
//           }
//         })
//         let newRecipie = await newRecipieData.json();
//     }


//     const onChangeFirstName = (e) => {
//             setFirstName(e.target.message)
//         }

//     const onChangeEmail = (e) => {
//         setEmail(e.target.value)
//     }

//     const onChangeRecipie = (e) => {
//         setRecipie(e.target.value)
//     }

//     const onChangeMeaning= (e) => {
//         setMeaning(e.target.value)
//     }

//     // useEffect( () => {
//     //     const handleSubmit = (e) => {
//     //         fetch('/cooking/addRecipie')
//     //         .then(alert('clicked'))
//     //     }

//     // }, [])

//     //  const handleSubmit = (e) => {
//     //      alert('clicked');
//         // e.preventDefault();
//         // axios.post("http://localhost:3000/cooking/addRecipie")
//         // .then((res) => {
//         //     if(res.data.status === "success") {
//         //         alert('dataReceived way to go!')
//         //         resetForm();
//         //     } else if (res.data.status === "fail") {
//         //         alert('fail')
//         //     }
//         // })


//     return (
//         <div className="recipie">
//             <div className="recipie__form">
//                 <form className="form" onSubmit={handleSubmit}>
//                     <input 
//                         name="firstName"
//                         onChange={onChangeFirstName} 
//                         placeholder="FirstName"
//                     /><br/>
//                     <input 
//                         name="email"
//                         onChange={onChangeEmail} 
//                         placeholder="Email"
//                     /><br/>
//                     <input 
//                         name="recipie"
//                         onChange={onChangeRecipie} 
//                         placeholder="Recipie"
//                     /><br/>
//                     <textarea
//                         onChange={onChangeMeaning}
//                         placeholder="What makes it special to you?"
//                         row="20"
//                     />
//                     <input type="submit" />
//                 </form>
//           </div>
//         </div>      
//   );
// }



// // Click to Share!</input>
// export default Recipie


// my attempt at a good form
                // <form>
                //     <Input 
                //         id="firstName" 
                //         onChange={onChangeFirstName} 
                //         value={message.firstName} 
                //         placeholder="FirstName" 
                //     />
                //     <Input 
                //         id="my-email" 
                //         type="email" 
                //         onChange={onChangeEmail} 
                //         value={message.email} 
                //         placeholder='Email' 
                //     />
                //     <Input 
                //         id="my-Recipie" 
                //         onChange={onChangeRecipie} 
                //         value={message.recepie} 
                //         placeholder="Recipie Name"  
                //         aria-describedby="my-helper-text" 
                //     />
                //     <TextareaAutosize 
                //         htmlFor="my-Meaning" 
                //         onChange={onChangeMeaning} 
                //         value={message.meaning} 
                //         placeholder="Why it's your favorite?">
                //     </TextareaAutosize>

                //     <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

                //     <Button 
                //         className={classes.button} 
                //         onClick={handleSubmit} 
                //         type="submit" 
                //         variant="outlined"
                //     >Click to Share!
                //     </Button>
                // </form>