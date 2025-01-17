import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../services/api';
import history from '../../services/history';

import { Types as RentTypes, Creators as RentActions } from '../ducks/rents';

function* addRent(action) {
  const { bookId, authToken } = action;
  const headers = { authorization: `Bearer ${authToken}` };

  try {
    yield call(api.post, `rent/${bookId}`, {}, { headers });
    yield put(RentActions.addRentSuccess());
    history.push('main');
  } catch (e) {
  }
}

function* removeRent(action) {
  const { rentId, authToken } = action;
  const headers = { Authorization: `Bearer ${authToken}` };

  try {
    yield call(api.delete, `rent/${rentId}`, { headers });
    yield put(RentActions.removeRentSuccess());
    history.push('main');
  } catch (e) {}
}

function* getRents(action) {
  const { authToken } = action;
  const headers = { Authorization: `Bearer ${authToken}` };

  try {
    const response = yield call(api.get, 'rent', { headers });
    yield put(RentActions.getRentsSuccess(response.data));
  } catch (e) {
    console.log(e.response);
  }
}

export default function* () {
  yield takeLatest(RentTypes.ADD_RENT_REQUEST, addRent);
  yield takeLatest(RentTypes.REMOVE_RENT_REQUEST, removeRent);
  yield takeLatest(RentTypes.GET_RENTS_REQUEST, getRents);
}
