import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getBooksRequest: [''],
  getBooksSuccess: ['data'],
  getBookRequest: ['id'],
  getBookSuccess: ['data'],
});

const INITIAL_STATE = {
  data: {},
  loading: false,
};

const getBooksRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const getBooksSuccess = (state = INITIAL_STATE, action) => ({

});

const getBookRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const getBookSuccess = (state = INITIAL_STATE, action) => ({

});

export default createReducer(INITIAL_STATE, {
  [Types.GET_BOOKS_REQUEST]: getBooksRequest,
  [Types.GET_BOOKS_SUCCESS]: getBooksSuccess,
  [Types.GET_BOOK_REQUEST]: getBookRequest,
  [Types.GET_BOOK_SUCCESS]: getBookSuccess,
});
