import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addReservationRequest: ['bookId', 'authToken'],
  addReservationSuccess: [''],
  removeReservationRequest: ['reservationId', 'authToken'],
  removeReservationSuccess: [''],
  getReservationsRequest: ['authToken'],
  getReservationsSuccess: ['data'],
});

const INITIAL_STATE = {
  data: [],
};


const addReservationRequest = (state = INITIAL_STATE) => ({
  ...state,
});

const addReservationSuccess = (state = INITIAL_STATE) => ({
  ...state,
});

const removeReservationRequest = (state = INITIAL_STATE) => ({
  ...state,
});

const removeReservationSuccess = (state = INITIAL_STATE) => ({
  ...state,
});

const getReservationsRequest = (state = INITIAL_STATE) => ({
  ...state,
});

const getReservationsSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  data: [
    ...action.data,
  ],
});

export default createReducer(INITIAL_STATE, {
  [Types.ADD_RESERVATION_REQUEST]: addReservationRequest,
  [Types.ADD_RESERVATION_SUCCESS]: addReservationSuccess,
  [Types.REMOVE_RESERVATION_REQUEST]: removeReservationRequest,
  [Types.REMOVE_RESERVATION_SUCCESS]: removeReservationSuccess,
  [Types.GET_RESERVATIONS_REQUEST]: getReservationsRequest,
  [Types.GET_RESERVATIONS_SUCCESS]: getReservationsSuccess,
});
