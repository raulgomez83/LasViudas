import React from 'react';


import { Menubar } from './Menubar';
import { Header } from './main/Header';
import { Delivery } from './Delivery';


export const Homepage = () => {
    return (
< div className="container">
            <Menubar/>
            <Header/>
            <Delivery/>
 </div>

    )
}
