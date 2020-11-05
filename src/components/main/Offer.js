import React from 'react';


import offerpicture1 from "../../images/fondue.jpeg";
import offerpicture2 from "../../images/queso-vino-campo.jpeg";
import offerpicture3 from "../../images/queso viejo.jpeg";
import { Menubar } from '../Menubar';
import { Delivery } from '../Delivery';

export const Offer = () => {
    return (
        <div className="container">
        <Menubar/>
        <section className="home__offer__box">
            <h2>Que ofrecemos </h2>
            <div className="home__offer__articles">
               <article className="home__offer__articles__item">
                   <img  src={offerpicture1} alt="W"/>
                   <h3>Nuestro menú</h3>
                   <p>Donde podrás encontrar elaboraciones y sugerencias que varían según la temporada</p>
                </article>
                <article className="home__offer__articles__item">
                   <img  src={offerpicture2} alt="W"/>
                   <h3>Nuestra bodega</h3>
                   <p>Escoge entre los mejores vinos que seleccionamos con mimo para nuestros clientes</p>
                </article>
                <article className="home__offer__articles__item">
                   <img  src={offerpicture3} alt="W"/>
                   <h3>Nuestros quesos</h3>
                   <p>Donde disfrutarás de más de 50 variedades tanto nacionales como internacionales</p>
                </article>
            </div>
        </section>
        <Delivery />

    </div>
    )
}
