import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, SignInContainer, SubmitContainer } from '../../styles/signStyle';
import Button from '../../Components/Button';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
            <Button type="submit">SignIn</Button>
            <Link to="/signup">
              <Button>SignUp</Button>
            </Link>
          </SubmitContainer>

        </SignInContainer>
      </Container>
    );
  }
}

export default SignIn;
