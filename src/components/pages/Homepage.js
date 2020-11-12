import React from 'react';
import { CarouselImages } from '../components/CarouselImages';
import { Delivery } from '../components/Delivery';
/* import { Header } from '../components/Header'; */
import { Menubar } from '../components/Menubar';




export const Homepage = () => {
    return (
< div className="container">
            <Menubar />
            <CarouselImages/>
            <Delivery/>
 </div>

    )
}
