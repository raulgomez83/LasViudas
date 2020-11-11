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
           <h3>About Us</h3>
            <p>
            We have been serving irresistible comfort food since 1999. Our mission is to keep you smiling with every bite.
            Treat yourself to a feel-good meal today!
           </p>
        </article>
    </section>
    </div>
    <Delivery/>
</div>
    )
}
