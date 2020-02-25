import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, SignInContainer, SubmitContainer } from '../../styles/signStyle';
import Button from '../../Components/Button';
import { Creators as BookActions } from '../../store/ducks/books';


class AddBooks extends Component {
  state = {
    name: '',
    description: '',
    stock: 0,
    price: 0,
    img_url: '',
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = () => {
    const {
      name, description, stock, price, img_url,
    } = this.state;
    const { addBookRequest, authToken } = this.props;

    addBookRequest({
      name, description, stock, price, img_url,
    }, authToken);
  }

  render() {
    const {
      name, description, stock, price, img_url,
    } = this.state;
    return (
      <Container>
        <h1>Add New Book</h1>
        <SignInContainer>
          <span>NAME</span>
          <input name="name" onChange={this.handleInputChange} value={name} />

          <span>DESCRIPTION</span>
          <input name="description" onChange={this.handleInputChange} value={description} />

          <span>PRICE</span>
          <input name="price" onChange={this.handleInputChange} value={price} />

          <span>STOCK</span>
          <input name="stock" onChange={this.handleInputChange} value={stock} />

          <span>IMAGE URL (leave empty if none)</span>
          <input name="img_url" onChange={this.handleInputChange} value={img_url} />

          <SubmitContainer>
            <Button type="button" onClick={this.handleSubmit}>Submit</Button>
          </SubmitContainer>

        </SignInContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  authToken: state.auth.token,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(BookActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
