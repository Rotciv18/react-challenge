import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { Container } from './styles';

export default function Menu() {
  return (
    <Container>

      <Link to="/main" style={{ textDecoration: 'none' }}>
        <Button>Books</Button>
      </Link>

      <Link to="/rents" style={{ textDecoration: 'none' }}>
        <Button>My Rents</Button>
      </Link>

      <Link to="/reservations" style={{ textDecoration: 'none' }}>
        <Button>Reservations</Button>
      </Link>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button>Logout</Button>
      </Link>

    </Container>
  );
}
