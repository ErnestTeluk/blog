import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html { 
    font-size: 10px;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-family: 'lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    padding: 30px 0;
  }
`;

export const SiteWrapper = styled.div`
  width: 672px;
  height: auto;
`;
