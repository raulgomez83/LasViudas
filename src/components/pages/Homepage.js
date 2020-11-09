import React from 'react';
import { Delivery } from '../components/Delivery';
import { Header } from '../components/Header';
import { Menubar } from '../components/Menubar';




export const Homepage = () => {
    return (
< div className="container">
            <Menubar />
            <Header/>
            <Delivery/>
 </div>

    )
}
