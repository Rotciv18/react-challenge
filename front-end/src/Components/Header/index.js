import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';


// import { Container } from './styles';

const Header = () => (
  <Container>
    <Link to="/">
      <span>BookyRents</span>
    </Link>
  </Container>
);

export default (Header);
