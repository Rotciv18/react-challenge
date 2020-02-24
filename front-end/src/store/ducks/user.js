import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  signUpRequest: ['data'],
});

const INITIAL_STATE = {
  data: {},
  loading: false,
};

const signUpRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

export default createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
});
