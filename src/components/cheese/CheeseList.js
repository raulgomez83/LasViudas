import React, { useEffect, useState } from 'react';
import {cheeses} from "../../data/cheeses";
import { Menubar } from '../components/Menubar';

import { CheeseCard } from './CheeseCard';
import { CheeseSearcher } from './CheeseSearcher';

export const CheeseList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [filteredCheese, setFilteredCheese] = useState("")

    const handleFilterChange = (event) => {
        setFilteredCheese(event.target.value)};

        const resultFilteredCheeses=cheeses.filter(cheese=>{
            return cheese.nombre.toLowerCase().includes(filteredCheese.toLowerCase())
        });

        const orderedCheeses=resultFilteredCheeses.sort(function(a, b){
            if(a.id > b.id){return 1};
            if(a.id<b.id){return -1};
            return 0;
        });

    return (
        <div className="cheese__container">
            <Menubar/>
            <CheeseSearcher handleFilterChange={handleFilterChange} filteredCheese={filteredCheese}/>
            <h2 className="cheese__card__title">Nuestra selección de quesos</h2>
            <div className="cheese__list__container">
            {orderedCheeses.map( cheese =>{
                return <CheeseCard key={cheese.id} {...cheese}/>
            })}
            </div>
        </div>
    )
}
