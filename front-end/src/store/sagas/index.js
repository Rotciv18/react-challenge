import { all } from 'redux-saga/effects';
import auth from './auth';
import books from './books';

export default function* rootSaga() {
  yield all([
    auth(),
    books(),
  ]);
}
