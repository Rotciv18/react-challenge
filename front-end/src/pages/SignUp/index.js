import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, SignInContainer, SubmitContainer } from '../../styles/signStyle';
import Button from '../../Components/Button';
import { Creators as AuthActions } from '../../store/ducks/auth';


class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
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
        <h1>Sign Up</h1>
        <SignInContainer>
          <span>NAME</span>
          <input name="name" onChange={this.handleInputChange} value={name} />

          <span>E-MAIL</span>
          <input type="email" name="email" onChange={this.handleInputChange} value={email} />

          <span>PASSWORD</span>
          <input type="password" name="password" onChange={this.handleInputChange} value={password} />

          <SubmitContainer>
            <Button type="button" onClick={this.handleSubmit}>Submit</Button>
          </SubmitContainer>

        </SignInContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
