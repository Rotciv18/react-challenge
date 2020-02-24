import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as BookActions } from '../../store/ducks/books';

import history from '../../services/history';

import { Container } from './styles';

function Book({ book, selectBook }) {
  function handleBookClick(book) {
    selectBook(book);
    history.push('/book');
  }

  return (
    <Container onClick={() => handleBookClick(book)}>
      <img src={book.img_url} alt="" />
      <h4>{book.name}</h4>
      <span>{book.stock}</span>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators(BookActions, dispatch);

export default connect(null, mapDispatchToProps)(Book);
