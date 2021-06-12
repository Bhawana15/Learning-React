import React from 'react'
import ReactDOM from 'react-dom'

const curDate = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();

ReactDOM.render(
    <> 
    <h1>Challenge-1</h1>
    <h2>List of Favorite Netflix Series</h2>
    <ol>
      <l>- Miraculous: Tales of Ladybug & Cat-Noir</l> <br/>
      <l>- Kim's Convenience</l> <br/>
      <l>- Fried, Fresh & Crispy</l> <br/>
      <l>- Alone</l> <br/>
    </ol>
    
    <br/> <br/> <br/>

    <h1>Challenge-2</h1>
    <h2>Print Current Date and Time : Refresh the page</h2>
    <p>Current Date is : {curDate} </p>
    <p>Current Time is : {curTime} </p>
    </>, 
    document.getElementById('root')
)