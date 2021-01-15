import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { CheeseItem } from "../components/cheese/CheeseItem";
import { CheeseList } from "../components/cheese/CheeseList";
import { Cookies } from "../components/components/Cookies";
import { Menubar } from "../components/components/Menubar";
import { PoliticaCookies } from "../components/components/PoliticaCookies";
import { Homepage } from "../components/pages/Homepage";

export const AppRouter = () => {
  return (
    <Router>
      <Menubar />
      <Cookies />
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/quesos" component={CheeseList} />
          <Route exact path="/queso/:Id" component={CheeseItem} />
          <Route exact path="/politicaCookies" component={PoliticaCookies} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
