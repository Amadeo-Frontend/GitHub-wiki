import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
  }
  a.remover {
    color: #ff0000;
    padding-top: 10px;
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  hr {
    color: #fafafa50;
    margin: 20px 0;
  }
`;
