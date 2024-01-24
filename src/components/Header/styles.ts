import styled from 'styled-components';

export const Wrapper = styled.header<{ isScroll: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: background-color 150ms ease-in-out, box-shadow 150ms ease-in-out;

  background-color: ${({ theme, isScroll }) => (isScroll ? theme.background : 'transparent')};
  box-shadow: ${({ isScroll }) => (isScroll ? '0 0 10px rgba(0,0,0,0.2)' : 'none')};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 36px;
  aspect-ratio: 16/9;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Menu = styled.nav`
  & ul {
    display: flex;
    gap: 3rem;
    list-style: none;
  }

  & a {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    text-decoration: none;
    transition: color 150ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.primary.main};
    }

    &[data-active='true'] {
      color: ${({ theme }) => theme.primary.main};
      border: 2px solid ${({ theme }) => theme.primary.main};
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
  }
`;
