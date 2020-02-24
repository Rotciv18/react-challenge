import React from 'react';
import Book from '../Book';

import { Container } from './styles';

export default function BookListContainer({ books }) {
  return (
    <Container>
      <Book />
    </Container>
  );
}
