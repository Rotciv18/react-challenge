import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../services/api';
import history from '../../services/history';

import { Types as AuthTypes, Creators as AuthActions } from '../ducks/auth';

function* signUp(action) {
  try {
    yield call(api.post, 'users', action.data);
    yield put(AuthActions.signUpSuccess());

    history.push('/');
  } catch (e) {
    console.log(e);
  }
}

function* signIn(action) {
  try {
    const response = yield call(api.post, 'sessions', action.data);

    yield put(AuthActions.signInSuccess(response.data));
    history.push('/main');
  } catch (e) {

  }
}

export default function* () {
  yield takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp);
  yield takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn);
}
