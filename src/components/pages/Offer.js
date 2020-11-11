import React from 'react';
import { Link } from 'react-router-dom';


import offerpicture1 from "../../images/fondue.jpeg";
import offerpicture2 from "../../images/queso-vino-campo.jpeg";
import offerpicture3 from "../../images/queso viejo.jpeg";

import { Menubar } from '../components/Menubar';
import { Delivery } from '../components/Delivery';




export const Offer = () => {

  
    return (
        <div className="container">
        <Menubar/>
        <section className="home__offer__box animate__animated animate__zoomIn">
            <h2>Que ofrecemos </h2>
            <div className="home__offer__articles">
               <article className="home__offer__articles__item">
                   <img  src={offerpicture1} alt="menú"/>
                   <h3 className="home__offer__articles__item__link"><Link  to="/menuPdf">Nuestro menú</Link></h3>
                   <p>Donde podrás encontrar elaboraciones y sugerencias que varían según la temporada</p>
                </article>
                <article className="home__offer__articles__item">
                   <img  className="home__offer__articles__item__image"src={offerpicture2} alt="vinos"/>
                   <h3>Nuestra bodega</h3>
                   <p>Escoge entre los mejores vinos que seleccionamos con mimo para nuestros clientes</p>
                </article>
                <article className="home__offer__articles__item">
                   <img  src={offerpicture3} alt="quesos"/>
                   <h3 className="home__offer__articles__item__link"><Link to="/quesos">Nuestros quesos</Link></h3>
                   <p>Donde disfrutarás de más de 50 variedades tanto nacionales como internacionales</p>
                </article>
            </div>
        </section>
        <Delivery/>

    </div>
    )
}