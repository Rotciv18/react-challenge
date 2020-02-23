import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;