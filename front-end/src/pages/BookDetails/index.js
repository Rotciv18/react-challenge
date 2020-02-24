import React from 'react';
import { connect } from 'react-redux';
import Button from '../../Components/Button';


import { Container } from './styles';

function BookDetails({ book }) {
  return (
    <Container>
      <h1>{book.name}</h1>
      <img src={book.img_url} alt="" />
      <h3>{book.description}</h3>
      <Button>{book.stock === 0 ? 'Reserve' : 'Rent'}</Button>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  book: state.books.selectedBook,
});

export default connect(mapStateToProps, null)(BookDetails);
