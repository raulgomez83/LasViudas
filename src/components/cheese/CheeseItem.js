
import React, { useMemo, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { Delivery } from '../Delivery';
import { CheeseModal } from '../main/CheeseModal';
import { Menubar } from '../Menubar';
import {getCheeseById} from "./getCheeseById";

export const CheeseItem = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleCheeseModal =()=>{
        return setIsOpen(!isOpen)
    };

    const {Id}= useParams();
    const cheese=  useMemo(() => getCheeseById(Id),[Id]);
    if ( !cheese ) {
        return <Redirect to="/quesos" />
    };
    const {nombre,origen,region,maduracion,intensidad,descripcion,image}=cheese;
    

    return (
        <div className="container">
            <Menubar/>
            <CheeseModal open={isOpen} 
                           handleCheeseModal={handleCheeseModal}
                           descripcion={descripcion}></CheeseModal>
            <div className="card" >
                <div className="face face1">
                    <div className="content">
                        <div className="icon">
                            <img src={image} alt={nombre}/>
                        </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <h3 className="mb-1">{nombre}</h3>
                        <ul>
                           <li>Origen: {origen}</li>
                           <li>Región: {region}</li>
                           <li>Maduración: {maduracion}</li>
                           <li>Intensidad: {intensidad}</li>
                           <li><button onClick={handleCheeseModal}>Descripción</button></li>
                        </ul>
                </div>
            </div>
        </div>
            <Delivery/>
        </div>
    )
}
