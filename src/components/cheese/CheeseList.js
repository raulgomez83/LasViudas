import React, { useState } from 'react';
import {cheeses} from "../../data/cheeses";
import { Delivery } from '../components/Delivery';
import { Menubar } from '../components/Menubar';

import { CheeseCard } from './CheeseCard';
import { CheeseSearcher } from './CheeseSearcher';

export const CheeseList = () => {
    const [filteredCheese, setFilteredCheese] = useState("")

    const handleFilterChange = (event) => {
        setFilteredCheese(event.target.value)};

        const resultFilteredCheeses=cheeses.filter(cheese=>{
            return cheese.nombre.toLowerCase().includes(filteredCheese.toLowerCase())
        })

    return (
        <div className="container">
            <Menubar/>
            <CheeseSearcher handleFilterChange={handleFilterChange} filteredCheese={filteredCheese}/>
            <h2 className="animate__animated animate__fadeIn">Nuestra selección de quesos</h2>
            <div className="cheese__list__container">
            {resultFilteredCheeses.map( cheese =>{
                return <CheeseCard key={cheese.id} {...cheese}/>
            })}
            </div>
            <Delivery/>
        </div>
    )
}
