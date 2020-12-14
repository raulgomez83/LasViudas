import React from 'react';

import { CarouselImages } from '../components/CarouselImages';

import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";



export const About = () => {
    return (
    <section className="home__about__box ">
        <CarouselImages/>
        <article className="home__about__article">
           <h2 className="mb-1">Bienvenidos a Las Viudas,</h2>
            <p>
            el primer Cheese Bar de A Coruña. Experimenta los sabores del queso en
            todas sus modalidades en un ambiente amigable y con encanto. Sino, también podrás degustar 
            nuestras tablas de queso en tu casa, realizando previamente tu <a href="#contact">Pedido</a>.
           </p>
           <div className="home_contact_socialmedia">
                <p>También puedes seguirnos en:</p>
                <nav className="home__contact__icon">
                    <a href="https://www.facebook.com/LasViudasCheeseBar/" >
                        <img className="home__contact__icon__link" src={facebook} alt="facebook"/>
                    </a>
                    <a href="https://www.instagram.com/lasviudascheesebar/?hl=es" >
                        <img className="home__contact__icon__link" src={instagram} alt="instagram"/>
                    </a>
                </nav>
            </div>
        </article>
    </section>
    )
}
