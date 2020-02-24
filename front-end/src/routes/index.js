import { Switch, Route } from 'react-router-dom';
import React from 'react';


import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/main" component={Main} />
  </Switch>
);

export default Routes;
