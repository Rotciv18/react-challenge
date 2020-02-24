import { Switch, Route } from 'react-router-dom';
import React from 'react';


import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes = () => (
  <Switch>
    <Route path="/signup" component={SignUp} />
    <Route exact path="/" component={SignIn} />
  </Switch>
);

export default Routes;
