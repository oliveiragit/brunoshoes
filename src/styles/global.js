import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing:  antialiased;
  }

  body, input, button {
    font: 14px  Roboto ,sans-serif;
  }
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
  #root {
    max-width: 1020px;
    margin: 0;
    padding: 0 40px 50px ;
  }
  button{
    cursor: pointer;
  }
`;
