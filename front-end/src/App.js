import React, { Fragment } from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import GlobalStyle from './styles/global';

import store from './store';


const App = () => 
<Provider store={store}>
  <Fragment>
    <Routes />
    <GlobalStyle />
  </Fragment>
</Provider>

export default App;
