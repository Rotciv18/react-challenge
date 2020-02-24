import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Book from '../Book';
import Button from '../Button';
import { dateFormatOptions } from '../../helper/date';

import { Creators as RentActions } from '../../store/ducks/rents';

import { Container } from './styles';

function BookListContainer({
  books, rentPage, rents, authToken, removeRentRequest,
}) {
  function handleDeliverRent(id) {
    removeRentRequest(id, authToken);
  }

  return (
    <Container>
      {books && books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      {rentPage && rents.map((rent) => (
        <div className="rentsContainer">
          <Book key={rent.id} book={rent.book} />
          <h3>{`Devolution Date: ${new Date(rent.devolution_date).toLocaleDateString('en-US', dateFormatOptions)}`}</h3>
          <h3>{`Price: ${rent.book.price}`}</h3>
          <Button onClick={() => handleDeliverRent(rent.id)}>Deliver</Button>
        </div>
      ))}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  authToken: state.auth.token,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(RentActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
