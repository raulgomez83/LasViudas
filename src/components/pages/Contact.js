import React from 'react';

import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg"



export const Contact = () => {
    return (
        <section className="home__contact" >
            <h2 id="contact" className=" mt-5 mb-5">LLámanos y haz tu pedido:<br/><b>881 92 61 28</b></h2>
            <div className="map">
                <iframe  className="mapaSize"src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11602.829085278707!2d-8.4081238!3d43.3622334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18ca5d5d6dde7dcc!2sLas%20Viudas%20Cheese%20Bar!5e0!3m2!1ses!2ses!4v1604227332231!5m2!1ses!2ses" /* width="520" height="370" */ frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0" title="map"></iframe>
            </div>
            <div className="home_contact_socialmedia">
                <nav className="home__contact__icon">
                    <a href="https://www.facebook.com/LasViudasCheeseBar/" className="home__contact__icon__link">
                        <img src={facebook} alt="facebook"/>
                    </a>
                    <a href="https://www.instagram.com/lasviudascheesebar/?hl=es" className="home__contact__icon__link">
                        <img src={instagram} alt="instagram"/>
                    </a>
                </nav>
            </div>
            <div className="home__contact__data">
                <p>Rúa Nicaragua 2,<br/>15005 A Coruña.</p>
                <p>
                    De lunes a sábado:<br/> <strong>10:00 - 15:00 <br/> 19:00 - 23:30</strong>
                </p>
            </div>
        </section>
    )
}
