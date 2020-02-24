import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addRentRequest: ['bookId', 'authToken'],
  addRentSuccess: ['data'],
  removeRentRequest: ['rentId', 'authToken'],
  removeRentSuccess: [''],
  getRentsRequest: ['authToken'],
  getRentsSuccess: ['data'],
});

const INITIAL_STATE = {
  rents: [],
};


const addRentRequest = (state = INITIAL_STATE) => ({
  ...state,
});

const addRentSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
});

const removeRentRequest = (state = INITIAL_STATE) => ({
  ...state,
});

const removeRentSuccess = (state = INITIAL_STATE) => ({
  ...state,
});

const getRentsRequest = (state = INITIAL_STATE) => ({
  ...state,
});

const getRentsSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  rents: [
    ...state.rents,
    action.data,
  ],
});

export default createReducer(INITIAL_STATE, {
  [Types.ADD_RENT_REQUEST]: addRentRequest,
  [Types.ADD_RENT_SUCCESS]: addRentSuccess,
  [Types.REMOVE_RENT_REQUEST]: removeRentRequest,
  [Types.REMOVE_RENT_SUCCESS]: removeRentSuccess,
  [Types.GET_RENTS_REQUEST]: getRentsRequest,
  [Types.GET_RENTS_SUCCESS]: getRentsSuccess,
});
