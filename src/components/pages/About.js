import React from 'react';

import aboutpicture1 from "../../images/queso nueces oscuro.jpeg";
import aboutpicture2 from "../../images/queso uvas oscuro.jpeg";
import { Delivery } from '../components/Delivery';
import { Menubar } from '../components/Menubar';



export const About = () => {
    return (
<div className="container">
    <Menubar/>
    <div className=" animate__animated animate__zoomIn">
    <section className="home__about__box ">
        <div className="home__about__pictures">
           <img src={aboutpicture1} alt="queso con nueces"  />
           <img src={aboutpicture2} alt="quesos apilados"  />
        </div>
        <article className="home__about__article">
           <h3 className="mb-1">Sobre nosotros</h3>
            <p>
            El primer Cheese Bar de A Coruña, experimenta los sabores del queso en
            todas sus modalidades en un ambiente amigable y con encanto.
           </p>
        </article>
    </section>
    </div>
    <Delivery/>
</div>
    )
}
