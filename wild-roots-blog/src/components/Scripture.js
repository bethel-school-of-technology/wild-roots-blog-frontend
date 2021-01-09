import React from 'react';
import '../assets/Scripture.css';
import Card from "./Card";
import verses from "../assets/verses"

//this is a container for Scriptures
//this page will have a featured Scripture for the day 
//and the ability for user to post Scripture of their choosing 
/* <Card className="scripture-card">
         <Card body>The Eternal Word
1In the beginning was the Word, and the Word was with God, and the Word was God. 2He was in the beginning with God. 3All things were made through Him, and without Him nothing was made that was made. 4In Him was life, and the life was the light of men. 5And the light shines in the darkness, and the darkness did not comprehend it.</Card>   */
function Scripture() {
    return (
        <div className="scripture">
            <h1>Jesus Christ is the same yesterday, today, and forever</h1>
            <div className="cards-container">
                <Card scriptureVerse={verses[0]}/> 
                <Card scriptureVerse={verses[1]}/> 
                <Card scriptureVerse={verses[2]}/> 
                <Card scriptureVerse={verses[3]}/> 
                <Card scriptureVerse={verses[4]}/>
            </div>
        </div>
    )
}

export default Scripture
