import React from 'react';
import {NavLink } from 'react-router-dom';

import dinner from "../../images/dinner.png"
import cheese from "../../images/cheese.png"
import pdf from "../../pdf/menu.pdf";

export const Offer = () => {
    return (
        <section className="home__offer__box ">
            <div className="container__img__quesos">
            <NavLink  to="/quesos"><h6 className=" item img_cheese">Quesos</h6></NavLink>
            </div>
            <article className="home__offer__article">
                <div className="offer__p">
                    <img className="offer__icon" src={dinner} alt="icono cena"/>
                    <p>Nuestras elaboraciones y sugerencias varían según la temporada, además podrás acompañarlas
                    con los vinos que seleccionamos con mimo para nuestros clientes.</p></div>
                <div className="offer__p">
                    <img className="offer__icon" src={cheese} alt="icono queso"/>
                    <p>Y no podrían faltar nuestros quesos, de los que podrás disfrutar más
                    de las 40 variedades tanto nacionales como internacionales con las que contamos.</p>
                </div>
            </article>
            <div className="container__img__menu">
            <a href={pdf}target="_blank "rel="noopener"><h6 className="item img_menu">Menú</h6></a>
            </div>
        </section>
    )
}
