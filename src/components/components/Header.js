import React from 'react';

import homepicture from "../../images/azul higos.jpeg";


export const Header = () => {
    return (
        <header className="home__header">
                   <h1>CHEESE BAR</h1>
                   <img src={homepicture} alt="queso azul e higos" className="mb-5" />
                   <h2 className="mb-5">Life is great. Cheese makes it better</h2>
        </header>
    )
}
