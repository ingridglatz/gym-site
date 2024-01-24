import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    filter: grayscale(100%);
  }

  & span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    margin: 1rem 0;
  }

  & p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.gray[100]};
  }
`;
