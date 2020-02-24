import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import history from '../../services/history';
import { Creators as AuthActions } from '../../store/ducks/auth';

import { Container, SignInContainer, SubmitContainer } from '../../styles/signStyle';
import Button from '../../Components/Button';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  componentDidMount() {
    const { auth } = this.props;
    console.log(auth);

    { if (auth) {
      if (auth.signed) {
        history.push('/main');
      }
    } }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSignIn = () => {
    const { email, password } = this.state;
    const { signInRequest } = this.props;
    console.log('oi');

    signInRequest({ email, password });
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <h1>Welcome to BookyRents!</h1>
        <SignInContainer>
          <span>E-MAIL</span>
          <input type="email" name="email" onChange={this.handleInputChange} value={email} />

          <span>PASSWORD</span>
          <input type="password" name="password" onChange={this.handleInputChange} value={password} />

          <SubmitContainer>
            <Button onClick={this.handleSignIn}>SignIn</Button>
            <Link to="/signup">
              <Button>SignUp</Button>
            </Link>
          </SubmitContainer>

        </SignInContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
