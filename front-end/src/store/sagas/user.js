import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Types as UserTypes, Creators as UserActions } from '../ducks/user';

function* signUp(action) {
  try {
    const response = yield call(api.post, 'users', action.data);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeLatest(UserTypes.SIGN_UP_REQUEST, signUp);
}
