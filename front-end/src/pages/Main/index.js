import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as BookActions } from '../../store/ducks/books';

import BookListContainer from '../../Components/BookListContainer';
import { Container } from './styles';

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
      <Container>
        <h1>Books</h1>
        {books.bookList && (
          <BookListContainer books={books.bookList} />
        )}
      </Container>
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
