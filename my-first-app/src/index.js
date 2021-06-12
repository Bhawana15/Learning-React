// var React = require('react') "OR"
import React from 'react'
// var ReactDOM = require('react-dom') "OR"
import ReactDOM from 'react-dom'

// You can write "React.Fragment" or only <> </> also does the same. Avoid writing <div> </div> because it creates
// an extra div inside root.
ReactDOM.render( 
    <React.Fragment> 
    <h1>Hello Bhawana</h1>
    <p>I am great. How are you?</p>
    </React.Fragment>, 
    document.getElementById("root"))