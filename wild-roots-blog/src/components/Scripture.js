import React, {useState, useEffect} from 'react';
import '../assets/Scripture.css';
import Card from "./Card";
import {Form, Row, Col, Button} from "react-bootstrap";
import axios from "axios"
// import verses from "./verses"

function Scripture() {
    const [verses, setVerses] = useState([]) 
    const [reference, setReference] = useState("") 
    const [verse, setVerse] = useState("")
    useEffect(()=> {
        const getScripture = async () => {
            const {data}=await axios.get("http://localhost:3001/scripture")
            
                setVerses(data.data.results)
            
        }
        getScripture()

    },[verses])  
    
    const handleClick= async() => {
        await axios.post("http://localhost:3001/scripture/add",{reference, verse}) 
         
    }

    return (
        <div className="scripture">
            <h1 className="scripture__title">Jesus Christ is the same yesterday, today, and forever</h1>

            <div className="cards-container">
            {verses.map(verse => (
                <Card scriptureVerse={verse}/>
            ))}
 
            </div>
            
            <Form className="scriptureForm">
            <h2>Add a new verse</h2>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Reference
                    </Form.Label>
                    <Col sm= "10">
                    <Form.Control 
                        type="text" 
                        value={reference}
                        onChange={(event)=> setReference(event.target.value)}    
                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Verse
                    </Form.Label>
                    <Col sm= "10">
                    <Form.Control 
                        type="text" 
                        value={verse}
                        onChange={(event)=> setVerse(event.target.value)} 
                    />
                    </Col>
                </Form.Group>
                <Button className="pt-3" onClick={handleClick}>Add</Button>
            </Form>
        </div>
    )
}

export default Scripture

//this is a container for Scriptures
//this page will have a featured Scripture for the day 
//and the ability for user to post Scripture of their choosing 
/* <Card className="scripture-card">
         <Card body>The Eternal Word
1In the beginning was the Word, and the Word was with God, and the Word was God. 2He was in the beginning with God. 3All things were made through Him, and without Him nothing was made that was made. 4In Him was life, and the life was the light of men. 5And the light shines in the darkness, and the darkness did not comprehend it.</Card>   */