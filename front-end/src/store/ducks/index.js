import { combineReducers } from 'redux';
import auth from './auth';
import books from './books';
import rents from './rents';
import reservation from './reservation';

export default combineReducers({
  auth, books, rents, reservation,
});
