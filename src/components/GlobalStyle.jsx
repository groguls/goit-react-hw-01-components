import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img{
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const PageWrapper = styled.div`
  background-color: #fcfcfc;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
