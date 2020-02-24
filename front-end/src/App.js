import React, { Fragment } from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import GlobalStyle from './styles/global';
import Header from './Components/Header';
import {Router} from 'react-router-dom';

import history from './services/history';
import store from './store';


const App = () => 
<Provider store={store}>
  <Fragment>
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  </Fragment>
</Provider>

export default App;
