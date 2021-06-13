import React from 'react';
import Heading from './Heading';
import { add, minus, divide, multiply } from './Calc';

function App() {
    return ( 
        <>
            <Heading />
            <ul>
                <li>The sum of two numbers is : { add(10, 3) } </li>
                <li>The subtraction of two numbers is : { minus(10, 3) } </li>
                <li>The division of two numbers is : { divide (10, 3) } </li>
                <li>The multiplication of two numbers is : { multiply (10, 3) } </li>
            </ul>
        </>
    );
}

export default App;