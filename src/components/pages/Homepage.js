import React from 'react';

import { CarouselImages } from '../components/CarouselImages';
import { Delivery } from '../components/Delivery';
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
