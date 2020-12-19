import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { CheeseItem } from "../components/cheese/CheeseItem";
import { CheeseList } from "../components/cheese/CheeseList";
import { Menubar } from "../components/components/Menubar";
import { Homepage } from "../components/pages/Homepage";

export const AppRouter = () => {
  return (
    <Router>
      <Menubar />
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/quesos" component={CheeseList} />
          <Route exact path="/queso/:Id" component={CheeseItem} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
