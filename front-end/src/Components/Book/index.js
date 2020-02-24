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

  const imgUrl = book.img_url === 'unavailable' ? 'https://image.shutterstock.com/image-vector/link-unavailable-icon-website-suitable-600w-1110144383.jpg' : book.img_url;
  return (
    <Container onClick={() => handleBookClick(book)}>
      <img src={imgUrl} alt="" />
      <h4>{book.name}</h4>
      <span>{book.stock}</span>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators(BookActions, dispatch);

export default connect(null, mapDispatchToProps)(Book);
