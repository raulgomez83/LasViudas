import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Homepage } from '../components/Homepage';
import { About } from '../components/main/About';
import { Contact } from '../components/main/Contact';
import { Offer } from '../components/main/Offer';
import { CheeseList } from '../components/cheese/CheeseList'; 
import { CheeseItem } from '../components/cheese/CheeseItem';


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

                  <Redirect to="/" />
                </Switch>
              </div>
            </Router>
       
    )
}
