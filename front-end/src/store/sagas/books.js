import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../services/api';
import history from '../../services/history';

import { Types as BookTypes, Creators as BookActions } from '../ducks/books';

function* getBooks(action) {
  try {
    const headers = { Authorization: `Bearer ${action.authToken}` };
    const response = yield call(api.get, 'books', { headers });

    yield put(BookActions.getBooksSuccess(response.data));
  } catch (e) {
  }
}

function* getBook(action) {
  const { id } = action;

  try {
    const headers = { Authorization: `Bearer ${action.authToken}` };
    const response = yield call(api.get, `books/${id}`, { headers });

    yield put(BookActions.getBookSuccess(response.data));
  } catch (e) {
  }
}

function* addBook(action) {
  const { data, authToken } = action;
  const headers = { Authorization: `Bearer ${authToken}` };

  try {
    yield call(api.post, 'books', data, { headers });
    yield put(BookActions.addBookSuccess());

    history.push('/');
  } catch (e) {
    console.log(e.response);
  }
}

export default function* () {
  yield takeLatest(BookTypes.GET_BOOKS_REQUEST, getBooks);
  yield takeLatest(BookTypes.GET_BOOK_REQUEST, getBook);
  yield takeLatest(BookTypes.ADD_BOOK_REQUEST, addBook);
}
