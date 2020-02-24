import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../services/api';
import history from '../../services/history';

import { Types as ReservationTypes, Creators as ReservationActions } from '../ducks/reservation';

function* addReservation(action) {
  const { bookId, authToken } = action;
  const headers = { authorization: `Bearer ${authToken}` };

  try {
    yield call(api.post, `reservation/${bookId}`, {}, { headers });
    yield put(ReservationActions.addReservationSuccess());
    history.push('main');
  } catch (e) {
  }
}

function* removeReservation(action) {
  const { reservationId, authToken } = action;
  const headers = { Authorization: `Bearer ${authToken}` };

  try {
    yield call(api.delete, `reservation/${reservationId}`, { headers });
    yield put(ReservationActions.removeReservationSuccess());
    history.push('main');
  } catch (e) {}
}

function* getReservations(action) {
  const { authToken } = action;
  const headers = { Authorization: `Bearer ${authToken}` };

  try {
    const response = yield call(api.get, 'reservation', { headers });
    yield put(ReservationActions.getReservationsSuccess(response.data));
  } catch (e) {
    console.log(e.response);
  }
}

export default function* () {
  yield takeLatest(ReservationTypes.ADD_RESERVATION_REQUEST, addReservation);
  yield takeLatest(ReservationTypes.REMOVE_RESERVATION_REQUEST, removeReservation);
  yield takeLatest(ReservationTypes.GET_RESERVATIONS_REQUEST, getReservations);
}
