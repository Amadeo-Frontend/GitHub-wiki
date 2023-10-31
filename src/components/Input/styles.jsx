import styled from 'styled-components';

export const InputContainer = styled.div`
  border: 1px solid #fafafa;
  border-radius: 20px;
  height: 62px;
  width: 100%;
  margin: 20px;

  input {
    background: transparent;
    border: transparent;
    padding: 10px 20px;
    width: 100%;
    height: 62px;
    font-size: 20px;
    color: #f0f3f6;
    outline: none;

    /* Melhorias de Acessibilidade */
    &:focus {
      border-radius: 20px;
      border: 2px solid #f0f3f6;
      box-shadow: 0 0 5px 1px rgba(0, 116, 217, 0.9); /* Adiciona uma sombra para destacar o input */
    }

    &::placeholder {
      color: #a7a7a7; /* Define uma cor de espaço reservado (placeholder) adequada */
    }
  }
`;
