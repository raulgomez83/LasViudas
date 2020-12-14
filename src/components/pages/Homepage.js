import React, { useEffect } from 'react';

import { Menubar } from '../components/Menubar';
import { About } from './About';
import {Contact} from "./Contact"
import { Offer } from './Offer';

export const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
<>
            <Menubar/>
            <About/>
            <Offer/>
            <Contact/>
 </>

    )
}
