import React from 'react';

import { Menubar } from '../components/Menubar';
import { About } from './About';
import {Contact} from "./Contact"
import { Offer } from './Offer';

export const Homepage = () => {
    return (
<>
            <Menubar/>
            <About/>
            <Offer/>
            <Contact/>
 </>

    )
}
