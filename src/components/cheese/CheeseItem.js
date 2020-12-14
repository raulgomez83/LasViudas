
import React, { useEffect, useMemo} from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';


import {getCheeseById} from "./getCheeseById";

import backIcon from "../../images/back-icon.png"

export const CheeseItem = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const {Id}= useParams();
    const cheese=  useMemo(() => getCheeseById(Id),[Id]);
    if ( !cheese ) {
        return <Redirect to="/quesos" />
    };
    const {nombre,origen,region,maduracion,intensidad,descripcion,image}=cheese;

    return (
        <div className="cheese__item">
            <h2 className="cheese__item__title mb-1">{nombre}</h2>
            <Link className="cheese__item__data__link "to="/quesos">
                <img  className="cheese__item__data__link__icon"src={backIcon} alt="icono atrás"/>
                <h4>Volver</h4> 
            </Link>
            <div className="cheese__item__card" >
                <img  className="cheese__item__card__img"src={image} alt={nombre}/>
                <section className="cheese__item__data__description mt-1" >
                    <h4 className="mb-1"><b>Descripción:</b></h4>
                    <h5  >{descripcion}</h5>
                </section>
                <ul className="cheese__item__data">
                    <li>Origen: <b>{origen}</b></li>
                    <li>Región: <b>{region}</b></li>
                    <li>Maduración: <b>{maduracion}</b></li>
                    <li>Intensidad: <b>{intensidad}</b></li>
                </ul>
            </div>
        </div>
    )
}
