import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { CheeseItem } from '../components/cheese/CheeseItem';
import { CheeseList } from '../components/cheese/CheeseList';

import { About } from '../components/pages/About';
import { Contact } from '../components/pages/Contact';
import { Homepage } from '../components/pages/Homepage';
import { Offer } from '../components/pages/Offer';
import { OpenPdf } from '../documents/OpenPdf';





export const AppRouter = () => {
    return (
            <Router> 
              <div>
                <Switch>
                  <Route exact path="/" component={Homepage}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/oferta" component={Offer}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/quesos" component={CheeseList}/>
                  <Route exact path="/queso/:Id" component={CheeseItem}/>
                  <Route exact path="/menuPdf" component={OpenPdf}/>

                  <Redirect to="/" />
                </Switch>
              </div>
            </Router>
       
    )
}
