import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getBooksRequest: ['authToken'],
  getBooksSuccess: ['data'],
  getBookRequest: ['id', 'authToken'],
  getBookSuccess: ['data'],
  selectBook: ['data'],
});

const INITIAL_STATE = {
  bookList: [],
  selectedBook: {},
  loading: false,
};

const getBooksRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const getBooksSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  bookList: [
    ...action.data,
  ],
});

const getBookRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const getBookSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  selectedBook: {
    ...action.data,
  },
});

const selectBook = (state = INITIAL_STATE, action) => ({
  ...state,
  selectedBook: {
    ...action.data,
  },
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_BOOKS_REQUEST]: getBooksRequest,
  [Types.GET_BOOKS_SUCCESS]: getBooksSuccess,
  [Types.GET_BOOK_REQUEST]: getBookRequest,
  [Types.GET_BOOK_SUCCESS]: getBookSuccess,
  [Types.SELECT_BOOK]: selectBook,
});
