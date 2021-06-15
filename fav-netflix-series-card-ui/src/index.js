import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css";
import Sdata from "./Sdata";

ReactDOM.render(
    <>
        <h1 className="heading_style"> List of my Favorite Netflix Series </h1>

        {Sdata.map((val) => {
                return (
                    <Card
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                );
            }
        )}

    </>
    , document.getElementById('root')
);

/*
<Card
            imgsrc = { Sdata[1].imgsrc }
            title = { Sdata[1].title }
            sname = { Sdata[1].sname }
            link = { Sdata[1].link }
        />
        <Card
        imgsrc = { Sdata[2].imgsrc }
            title = { Sdata[2].title }
            sname = { Sdata[2].sname }
            link = { Sdata[2].link }
        />
        <Card
        imgsrc = { Sdata[3].imgsrc }
            title = { Sdata[3].title }
            sname = { Sdata[3].sname }
            link = { Sdata[3].link }
        />
        <Card
        imgsrc = { Sdata[4].imgsrc }
            title = { Sdata[4].title }
            sname = { Sdata[4].sname }
            link = { Sdata[4].link }
        />
        */