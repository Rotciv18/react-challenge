import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as RentActions } from '../../store/ducks/rents';

import { Container } from '../Main/styles';
import BookListContainer from '../../Components/BookListContainer';

class Rents extends Component {
  state ={}

  componentDidMount() {
    const { getRentsRequest, authToken } = this.props;

    getRentsRequest(authToken);
  }

  render() {
    const { rents } = this.props;
    const books = rents.map((rent) => rent.book);

    return (
      <Container>
        <button type="button" onClick={() => console.log(books)}>rents</button>
        <h1>My Rents</h1>
        {books && (
          <BookListContainer books={books} />
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(RentActions, dispatch);

const mapStateToProps = (state) => ({
  rents: state.rents.data,
  authToken: state.auth.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Rents);
