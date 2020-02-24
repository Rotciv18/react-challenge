import React from 'react';
import {Container} from './styles';
import {Link} from 'react-router-dom';

// import { Container } from './styles';

const Header = () => 

  <Container>
    <Link to='/signup'>
      <span>BookyRents</span>
    </Link>
  </Container>;

export default Header;
