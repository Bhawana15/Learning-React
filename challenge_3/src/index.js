import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const cssStyle = {};
const curHour = new Date().getHours();
let greeting = '';

if (curHour >= 1 && curHour < 12) {
    greeting = "Good Morning !!";
    cssStyle.color = 'green';
} else if (curHour >= 12 && curHour < 19) {
    greeting = "Good Afternoon !!";
    cssStyle.color = 'Orange';
} else {
    greeting = "Good Night !!";
    cssStyle.color = 'Blue';
}

ReactDOM.render(
    <>
        <h2>Challenge-3</h2>
        <div className="wish">
            <h1>Hello sir, <span style={cssStyle}> {greeting} </span></h1>
        </div>
    </>,
    document.getElementById('root')
);