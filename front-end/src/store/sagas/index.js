import { all } from 'redux-saga/effects';
import auth from './auth';
import books from './books';
import rents from './rents';
import reservation from './reservation';

export default function* rootSaga() {
  yield all([
    auth(),
    books(),
    rents(),
    reservation(),
  ]);
}
