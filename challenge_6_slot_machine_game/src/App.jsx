import React from "react";
import Heading from "./Heading";
import SlotMachine from "./SlotMachine";

const App = () => {
    return (
        <>
            <Heading />
            <div className = "outer">
                <SlotMachine x = '😃' y = '😃' z = '😃' />
                <SlotMachine x = '😿' y = '❤️' z = '😃' />
                <SlotMachine x = '😃' y = '😆' z = '🍀' />           
                <SlotMachine x = '🙃' y = '🙃' z = '🙃' />
                <SlotMachine x = '😉' y = '💃' z = '💃' />
                <SlotMachine x = '👩' y = '👩' z = '👩' />
            </div>
        </>
    );
};

export default App;