import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, SignInContainer, SubmitContainer } from '../../styles/signStyle';
import Button from '../../Components/Button';
import { Creators as AuthActions } from '../../store/ducks/auth';


class AddBooks extends Component {
  state = {
    name: '',
    description: '',
    stock: null,
    img_url: '',
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = () => {
    const { name, email, password } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest({
      name, email, password, admin: false,
    });
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <Container>
        <h1>Add New Book</h1>
        <SignInContainer>
          <span>NAME</span>
          <input name="name" onChange={this.handleInputChange} value={name} />

          <span>DESCRIPTION</span>
          <input name="email" onChange={this.handleInputChange} value={email} />

          <span>STOCK</span>
          <input name="stock" onChange={this.handleInputChange} value={password} />

          <span>IMAGE URL (leave empty if none)</span>
          <input name="img_url" onChange={this.handleInputChange} value={password} />

          <SubmitContainer>
            <Button type="button" onClick={this.handleSubmit}>Submit</Button>
          </SubmitContainer>

        </SignInContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(AddBooks);
