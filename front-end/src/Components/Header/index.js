import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';

import { Container } from './styles';


// import { Container } from './styles';

const Header = () => (
  <Container>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <span>BookyRents</span>
    </Link>
    <Menu />
  </Container>
);

export default (Header);
