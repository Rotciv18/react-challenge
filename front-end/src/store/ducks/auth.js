import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  signUpRequest: ['data'],
  signUpSuccess: [''],
  signInRequest: ['data'],
  signInSuccess: ['data'],
  signOut: [''],
});

const INITIAL_STATE = {
  loading: false,
  token: null,
  signed: false,
  userId: '',
  admin: false,
};

const signUpRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const signUpSuccess = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
});

const signInRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const signInSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  token: action.data.token,
  userId: action.data.user.id,
  signed: true,
  admin: action.data.user.admin,
});

const signOut = (state = INITIAL_STATE) => ({
  INITIAL_STATE,
});

export default createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_OUT]: signOut,
});
