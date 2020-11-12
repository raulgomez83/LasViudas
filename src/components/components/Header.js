import React from 'react';

import homepicture from "../../images/azul higos.jpeg";


export const Header = () => {
    return (
        <header className="home__header  animate__animated animate__zoomIn">
                   <img src={homepicture} alt="queso azul" className="mb-5" />
        </header>
    )
}
