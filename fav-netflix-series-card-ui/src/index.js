import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css";

ReactDOM.render(
    <>
        <h1 className="heading_style"> List of my Favorite Netflix Series </h1>
        <Card 
            imgsrc = "https://wallpapercave.com/wp/wp4056410.jpg"
            title = "Netfilx Original Series"
            sname = "DARK"
            link = "https://www.netflix.com/in/title/80100172"
        />
        <Card 
            imgsrc = "https://www.hitc.com/static/uploads/hitcn/1816/extracurricular_netflix_780_154494"
            title = "A Netfilx Original Series"
            sname = "extra curricular"
            link = "https://www.netflix.com/in/title/80990668?source=35"
        />
        <Card 
            imgsrc = "https://wallpapercave.com/wp/wp1917154.jpg"
            title = "A Netfilx Original Series"
            sname = "Stranger Things"
            link = "https://www.netflix.com/in/title/80057281?preventIntent=true"
        />
    </>
    , document.getElementById('root')
);

/*
<Card 
            imgsrc = "https://wallpapercave.com/wp/wp1917154.jpg"
            title = "A Netfilx Original Series"
            sname = "The Vampire Diaries"
            link = "https://www.netflix.com/in/title/70143860?preventIntent=true"
        />
        <Card 
            imgsrc = "https://wallpapercave.com/wp/wp1917154.jpg"
            title = "A Netfilx Original Series"
            sname = "My first 2 love"
            link = "https://www.netflix.com/in/title/81026700?preventIntent=true"
        />
        */