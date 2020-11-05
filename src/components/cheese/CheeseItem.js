import { Button } from '@material-ui/core';
import React, { useMemo } from 'react';
import {Redirect, useParams } from 'react-router-dom';
import { Delivery } from '../Delivery';
import { Menubar } from '../Menubar';
import {getCheeseById} from "./getCheeseById";




export const CheeseItem = () => {

    const {Id}= useParams();

    const cheese=  useMemo(() => getCheeseById(Id),[Id]);


    if ( !cheese ) {
        return <Redirect to="/quesos" />;
    }

    const {nombre,origen,region,maduracion,intensidad,descripcion,image}=cheese

    return (
        <div className="container">
            <Menubar/>
            <h2>{nombre}</h2>
            <div className="cheese__item">
                <div className="cheese__item__image">
                    <img src={image} alt={nombre}/>
                </div>
                <div className="cheese__item__data">
                    <ul>
                        <li>Origen:<b> {origen}</b></li>
                        <li>Región:<b> {region} </b></li>
                        <li>Maduración:<b> {maduracion}</b></li>
                        <li>Intensidad:<b> {intensidad}</b></li>
                        <li className="cheese__item__data__description">Descripción:<br/><h6>{descripcion}</h6></li>
                    </ul>
                    <Button color="gold"><b>Volver</b></Button>
                </div>
            </div>
            <Delivery/>
        </div>
    )
}
