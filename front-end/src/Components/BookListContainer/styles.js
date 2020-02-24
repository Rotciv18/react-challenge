import styled from 'styled-components';

export const Container = styled.div`
  margin: 32px;
  border: 2px solid #000;
  padding: 0 12px 12px 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;


  div {
    margin: 12px 0 0 12px;
  }

  .rentsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
