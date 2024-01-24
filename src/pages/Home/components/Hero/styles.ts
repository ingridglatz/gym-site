import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  width: 100%;

  &::before {
    content: '';
    background: url('/cardio-banner.jpg') no-repeat center center;
    background-size: 100%;
    width: 100%;
    height: 100%;
    filter: brightness(0.3);
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.text};
  font-style: italic;

  & span {
    color: ${({ theme }) => theme.primary.main};
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  margin-bottom: 1.5rem;
`;
