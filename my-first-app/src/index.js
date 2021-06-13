import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

/*
const first_name = "Bhawana";
const last_name = "Tiwari";
const img1 = "https://picsum.photos/id/1/200/300";
const img2 = "https://picsum.photos/id/2/250/300";
const img3 = "https://picsum.photos/id/3/300/300";
const img4 = "https://picsum.photos/id/4/350/300";
const link = "https://www.linkedin.com/in/bhawanatiwari/" 

<h1 className = "heading">My name is {first_name} {last_name} !!!</h1>
    <a href = {link} target = "_myLinkedInProfile">
        <img src = {img1} alt = "Random Image"/>
    </a>
    <div className="img_div">
    <img src = {img2} alt = "Random Image"/>
    <img src = {img3} alt = "Random Image"/>
    <img src = {img4} alt = "Random Image"/>
    </div>*/
    // "OR" var React = require('react')
    // "OR" var ReactDOM = require('react-dom')
    // You can write "React.Fragment" or only <> </> also does the same. Avoid writing <div> </div> because it creates
// an extra div inside root.
/*
<p>I am great. My lucky number is {3+4}. What is yours?</p>
<p> "OR" you could also do it by using + operator</p> 
    <h1 contentEditable = "true">My name is {first_name + " " + last_name} !!!</h1>
    <p> "OR" you could also do it by using a back-tick operator</p>
    <h1> {`My name is ${first_name} ${last_name} !!!`} </h1> */
// If you have to write Template Literals, then you have to use back-tick. 
// And if we have to use JS inside it then we have to write $ and curly braces.
// Adding HTML Global Attribute : contenteditable (as contentEditable) i.e in cameCase in h1 tag
// Adding image. As img tag is a self closing so / is required at the end
// Created Image Gallery
// Added anchor tag in one of the image
// Added ./index.css
// For writing inline css, you have to create an object like this
/* const heading = {
    color : "#ff9191",
    textTransform: "capitalize"
};
*/
// Whenever we create a components file, the first letter of the name of file has to be capital.
// eg. Heading.jsx