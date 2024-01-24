import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.primary.main};
  color: ${({ theme }) => theme.text};
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: bold;
  }
`;
