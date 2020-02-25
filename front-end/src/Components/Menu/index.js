import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../Button';
import { Container } from './styles';

import { Creators as AuthActions } from '../../store/ducks/auth';

function Menu({ signOut, admin }) {
  function handleSignOut() {
    signOut();
  }

  return (
    <Container>

      {admin && (
        <Link to="/addBooks" style={{ textDecoration: 'none' }}>
          <Button>Add Books</Button>
        </Link>
      )}

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
        <Button onClick={() => handleSignOut()}>Logout</Button>
      </Link>

    </Container>
  );
}

const mapStateToProps = (state) => ({
  admin: state.auth.admin,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
