import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    font-family: 'Play';
    background: ${theme.palette.background.body};
    color: ${theme.palette.text.primary};
    ${theme.typography.body};


    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }
  
    input[type=number] {
      -moz-appearance: textfield;
    }
  }
`;

export default GlobalStyle;
