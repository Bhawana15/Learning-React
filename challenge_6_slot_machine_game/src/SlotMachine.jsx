import React from "react";

const SlotMachine = (props) => {
    if ((props.x === props.y) && (props.y === props.z)) {
        return (
            <>
                <div className="slot_inner">
                    <h1> { props.x } { props.y } { props.z } </h1>
                    <h1> This is matching </h1>
                    <hr />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="slot_inner">
                    <h1> { props.x } { props.y } { props.z } </h1>
                    <h1> This is not matching </h1>
                    <hr />
                </div>
            </>
        );
    }
}

export default SlotMachine;

/*
    let x = '😃';
    let y = '😃';
    let z = '😢'; */