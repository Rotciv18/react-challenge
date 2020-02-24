import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  width: 250px;
  border: 1px solid #000;
  border-radius: 6px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6px;
  cursor: pointer;
  position: relative;

  &:hover {
    background: #cabf45;
  }

  span {
    position: absolute;
    bottom: 4px;
    right: 4px;
  }

  img {
    height: 80%;
    width: 100%;
  }

  h4 {
    margin-top: 6px;
  }
`;
