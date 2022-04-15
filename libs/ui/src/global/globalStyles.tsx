import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { Font } from '../styles/global';

export const GlobalStyles = createGlobalStyle`
  ${normalize()}
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700;900&family=Space+Mono:wght@400;700&display=swap');
  @import url("https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");

  html {
    font-size: 10px;
    background-color: #050a1b;
    box-sizing: border-box;
  }
  body {
    font-family: ${Font.Family.Body};
    color: white;
  }
`;
