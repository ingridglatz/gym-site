import styled from 'styled-components';

export const Details = styled.details`
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.gray[300]};
  width: 100%;

  & summary {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }

  & p {
    font-size: 1rem;
    color: ${({ theme }) => theme.gray[100]};
    margin-top: 1rem;
  }
`;
