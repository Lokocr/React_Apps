import React, { useState, useEffect } from 'react'
import "normalize.css";

const Main = () =>
{

    const APP_ID = 'be8178b7';
    const APP_KEY = 'a6aa8ab438a034e2a95e8bc591c5cb3f';

    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {
        getRecipe();
    }, []); // With the empty array, this ain't going to make a request every refresh.

    const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data);
    };


    return (
        <div>
            <h1>Recipe App</h1>
        </div>
    );
};

export default Main;