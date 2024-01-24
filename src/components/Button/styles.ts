import styled from 'styled-components';

export const ButtonStyled = styled.a`
  padding: 0.75rem 1.75rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary.main};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 150ms ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primary.dark};
  }

  &:active {
    background-color: ${({ theme }) => theme.primary.main};
  }
`;
