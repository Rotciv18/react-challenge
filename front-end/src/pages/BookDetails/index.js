import React from 'react';
import { connect } from 'react-redux';
import Book from '../../Components/Book';
import Button from '../../Components/Button';


import { Container } from './styles';

function BookDetails({ book }) {
  return (
    <Container>
      <Book book={book} />
      <h3>{book.description}</h3>
      <Button>{book.stock === 0 ? 'Reserve' : 'Rent'}</Button>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  book: state.books.selectedBook,
});

export default connect(mapStateToProps, null)(BookDetails);
