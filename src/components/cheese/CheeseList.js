import React from 'react';
import {cheeses} from "../../data/cheeses";
import { Delivery } from '../components/Delivery';
import { Menubar } from '../components/Menubar';

import { CheeseCard } from './CheeseCard';

export const CheeseList = () => {
    return (
        <div className="container">
            <Menubar/>
            <h2 className="animate__animated animate__fadeIn">Nuestra selección de quesos</h2>
            <div className="cheese__list__container">
            {cheeses.map( cheese =>{
                return <CheeseCard key={cheese.id} {...cheese}/>
            })}
            </div>
            <Delivery/>
        </div>
    )
}
