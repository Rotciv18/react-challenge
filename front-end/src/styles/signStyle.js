import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #000;
  }
`;

export const SignInContainer = styled.div`
  width: 550px;
  background-color: #CCC;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 25px;

  span {
    margin: 6px 0px;
  }

  div {
    margin-top: 24px;
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin: 0px 12px;
  }
`;
