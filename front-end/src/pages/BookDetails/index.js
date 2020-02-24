import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../Components/Button';

import { Creators as RentActions } from '../../store/ducks/rents';


import { Container } from './styles';

function BookDetails({ book, addRentRequest, authToken }) {
  const bookActionType = book.stock === 0 ? 'Reserve' : 'Rent';

  function handleClick() {
    if (bookActionType === 'Rent') {
      addRentRequest(book.id, authToken);
    }
  }

  return (

    <Container>
      <h1>{book.name}</h1>
      <img src={book.img_url} alt="" />
      <h3>{book.description}</h3>
      <Button onClick={handleClick}>{bookActionType}</Button>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators(RentActions, dispatch);

const mapStateToProps = (state) => ({
  book: state.books.selectedBook,
  authToken: state.auth.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
