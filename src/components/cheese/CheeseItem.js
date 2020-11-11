
import React, { useMemo} from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';

import { Delivery } from '../components/Delivery';
import { Menubar } from '../components/Menubar';
import {getCheeseById} from "./getCheeseById";

export const CheeseItem = () => {

    const {Id}= useParams();
    const cheese=  useMemo(() => getCheeseById(Id),[Id]);
    if ( !cheese ) {
        return <Redirect to="/quesos" />
    };
    const {nombre,origen,region,maduracion,intensidad,descripcion,image}=cheese;

    return (
        <div className="container">
            <Menubar/>
            <h2 className="cheese__item__title">{nombre}</h2>
            <div className="cheese__item animate__animated animate__zoomIn" >
                <img src={image} alt={nombre}/>
                <ul className="cheese__item__data">
                    <li>Origen: <b>{origen}</b></li>
                    <li>Región: <b>{region}</b></li>
                    <li>Maduración: <b>{maduracion}</b></li>
                    <li>Intensidad: <b>{intensidad}</b></li>
                </ul>
                <section className="mt-1">
                    <h5 >Descripción:</h5>
                    <h6  className="cheese__item__data__description">{descripcion}</h6>
                    <Link className="cheese__item__data__link "to="/quesos">Volver</Link>
                </section>
            </div>
            <Delivery/>
        </div>
    )
}
