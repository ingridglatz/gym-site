import styled from 'styled-components';

export const Container = styled.div`
  width: 270px;
  height: 400px;
  background: ${({ theme }) => theme.gray[300]};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &[data-recommended='true'] {
    border: 2px solid ${({ theme }) => theme.primary.main};
  }

  & h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    text-align: center;
  }

  & > span {
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    text-align: center;
    width: 100%;
  }

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const RecommendedPlan = styled.span`
  font-size: 1rem !important;
  font-weight: bold;
  color: ${({ theme }) => theme.primary.main} !important;
  text-align: center;
  width: 100%;
`;
