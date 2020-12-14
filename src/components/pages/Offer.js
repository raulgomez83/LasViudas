import React from 'react';
import { Link } from 'react-router-dom';

import dinner from "../../images/dinner.png"
import cheese from "../../images/cheese.png"
import pdf from "../../pdf/menu.pdf";

export const Offer = () => {
    return (
        <section className="home__offer__box ">
            <Link  to="/quesos">
                <h2 className=" item img_cheese">Quesos</h2>
            </Link>
            <article className="home__offer__article">
                <div className="offer__p">
                    <img className="offer__icon" src={dinner} alt="icono cena"/>
                    <p>Nuestras elaboraciones y sugerencias varían según la temporada, además podrás acompañarlas
                    por los vinos que seleccionamos con mimo para nuestros clientes.</p></div>
                <div className="offer__p">
                    <img className="offer__icon" src={cheese} alt="icono queso"/>
                    <p>Y no podrían faltar nuestros quesos de los que podrás disfrutar más
                    de las 40 variedades tanto nacionales como internacionales de las que contamos.</p>
                </div>
            </article>
            <a href={pdf}download="menú"rel="noopener">
                <h2 className="item img_menu">Menú</h2>
            </a>
        </section>
    )
}
