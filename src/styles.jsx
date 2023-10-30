import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #22272e;
    color: #f0f3f6;
}

.container-input{
    max-width: 820px;
    width: 90%;
    display: flex;
    align-items: center;
}
`;
