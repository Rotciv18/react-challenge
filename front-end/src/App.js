import React, { Fragment } from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './routes';
import {Provider} from 'react-redux';
import GlobalStyle from './styles/global';
import Header from './Components/Header';
import {Router} from 'react-router-dom';

import history from './services/history';
import {store, persistor} from './store';


const App = () =>
<Provider store={store}>
  <PersistGate persistor={persistor}>

      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>

  </PersistGate>
</Provider>

export default App;
