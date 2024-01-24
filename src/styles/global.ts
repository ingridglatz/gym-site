import * as styled from 'styled-components';

export const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  #root {
    height: 100dvh;
    display: flex;
    flex-direction: column;
  }
`;
