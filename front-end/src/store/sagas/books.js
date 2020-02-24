import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Types as BookTypes, Creators as BookActions } from '../ducks/books';

function* getBooks() {
  try {
    const response = yield api.call(api.get, 'books');

    yield put(BookActions.getBooksSuccess(response.data));
  } catch (e) {

  }
}

function* getBook(action) {
  const { id } = action;

  try {
    const response = yield api.call(api.get, `books/${id}`);

    yield put(BookActions.getBookSuccess(response.data));
  } catch (e) {

  }
}

export default function* () {
  yield takeLatest(BookTypes.GET_BOOKS_REQUEST, getBooks);
  yield takeLatest(BookTypes.GET_BOOK_REQUEST, getBook);
}
