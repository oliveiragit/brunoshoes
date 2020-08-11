import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  min-height: 100%;
  div {
    border-radius: 8px;
    background: #fff;
    padding: 10px;
    max-width: 500px;
    h1 {
      margin-bottom: 2px;
      color: #333;
    }
    p {
      text-align: justify;
      margin-top: 5px;
      color: #404040;
    }
  }
`;
