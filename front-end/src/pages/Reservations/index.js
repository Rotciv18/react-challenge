import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as RentActions } from '../../store/ducks/reservation';

import { Container } from '../Main/styles';
import BookListContainer from '../../Components/BookListContainer';

class Reservations extends Component {
  state ={}

  componentDidMount() {
    const { getReservationsRequest, authToken } = this.props;

    getReservationsRequest(authToken);
  }

  render() {
    const { reservations } = this.props;

    return (
      <Container>
        <h1>My Rents</h1>
        {reservations && (
          <BookListContainer reservations={reservations} reservationPage />
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(RentActions, dispatch);

const mapStateToProps = (state) => ({
  reservations: state.reservation.data,
  authToken: state.auth.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Reservations);
