import React from 'react'
import ReactDOM from 'react-dom'

const curDate = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();

ReactDOM.render(
    <> 
        <h1>Challenge-1</h1>
        <h2>List of Favorite Netflix Series</h2>
        <ol>
            <li> Miraculous: Tales of Ladybug & Cat-Noir</li> <br/>
            <li> Kim's Convenience</li> <br/>
            <li> Fried, Fresh & Crispy</li> <br/>
            <li> Alone</li> <br/>
        </ol>
        <br/> <br/>
        <h1>Challenge-2</h1>
        <h2>Print Current Date and Time : Refresh the page</h2>
        <p>Current Date is : {curDate} </p>
        <p>Current Time is : {curTime} </p>
    </>, 
    document.getElementById('root')
)