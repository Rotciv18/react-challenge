import React, { Component, Fragment } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as BookActions } from '../../store/ducks/books';

import BookListContainer from '../../Components/BookListContainer';

class Main extends Component {
  state ={
  }

  // eslint-disable-next-line camelcase
  componentDidMount() {
    const { getBooksRequest, auth } = this.props;

    getBooksRequest(auth.token);
  }

  render() {
    const { books } = this.props;
    return (
      <>
        {books && (
          <BookListContainer books={books.bookList} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(BookActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
