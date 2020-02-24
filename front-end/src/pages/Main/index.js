import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BookListContainer from '../../Components/BookListContainer';
import Book from '../../Components/Book';

class Main extends Component {
  state ={}

  componentWillMount() {

  }

  render() {
    return (
      <BookListContainer />
    );
  }
}

const mapStateToProps = (state) => ({

});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Main);
