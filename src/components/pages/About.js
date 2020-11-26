import React from 'react';

import { CarouselImages } from '../components/CarouselImages';



export const About = () => {
    return (
    <section className="home__about__box ">
        <CarouselImages/>
        <article className="home__about__article">
           <h2 className="mb-1">Bienvenidos</h2>
            <p>
            al primer Cheese Bar de A Coruña. Experimenta los sabores del queso en
            todas sus modalidades en un ambiente amigable y con encanto. Sino, también podrás degustar 
            nuestras tablas de queso en tu casa, realizando previamente tu <a href="#contact">Pedido</a>.
           </p>
        </article>
    </section>
    )
}
