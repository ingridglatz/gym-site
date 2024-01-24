import styled from 'styled-components';

export const Container = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  font-style: italic;
  text-align: center;

  & span {
    color: ${({ theme }) => theme.primary.main};
  }
`;
