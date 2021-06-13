import React from 'react'
import Heading from './Heading';
import Division, { cssStyle, greeting } from './Division';

function App() {
    return (
        <>
            <Heading />
            <Division></Division>
        </>
    );
}

export default App;
export { cssStyle, greeting };