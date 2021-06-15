import React from 'react';
import Sdata from "./Sdata";
import Card from './Card';


const App = () => {
    return (
        <>
        <h1 className="heading_style"> List of my Favorite Netflix Series </h1>

        {Sdata.map((val) => {
                return (
                    <Card
                        key = { val.id }
                        imgsrc = { val.imgsrc }
                        title = { val.title }
                        sname = { val.sname }
                        link = { val.link }
                    />
                );
            }
        )}

    </>
    );
}

export default App;