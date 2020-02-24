import { persistStore } from 'redux-persist';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistReducers from './persistReducers';

import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), applyMiddleware(...middlewares));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
