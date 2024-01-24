import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Container, ImageContainer, Menu, Wrapper } from './styles';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <Wrapper isScroll={isScroll}>
      <Container>
        <ImageContainer>
          <img src="/logo_panobianco_white.png" />
        </ImageContainer>

        <Menu>
          <ul>
            <li>
              <Link to="/" data-active={location.pathname === '/'}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/plans" data-active={location.pathname === '/plans'}>
                Planos
              </Link>
            </li>
            <li>
              <Link to="/faq" data-active={location.pathname === '/faq'}>
                FAQ
              </Link>
            </li>
          </ul>
        </Menu>

        <Button href="#">Matricule-se</Button>
      </Container>
    </Wrapper>
  );
}
