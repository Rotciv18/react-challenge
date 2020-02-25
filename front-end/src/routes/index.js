import { Switch, Route } from 'react-router-dom';
import React from 'react';


import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';
import BookDetails from '../pages/BookDetails';
import Rents from '../pages/Rents';
import Reservations from '../pages/Reservations';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/main" component={Main} />
    <Route path="/book" component={BookDetails} />
    <Route path="/rents" component={Rents} />
    <Route path="/reservations" component={Reservations} />
  </Switch>
);

export default Routes;
