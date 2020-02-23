import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fffde7;
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    background-color: #cbc26d;
    cursor: pointer;

    &:hover {
      background-color: #fff59d;
    }
  }
`;