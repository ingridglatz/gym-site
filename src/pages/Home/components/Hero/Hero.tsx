import { Button } from '../../../../components/Button';
import { Container, HeroSection, SubTitle, Title } from './styles';

export function Hero() {
  return (
    <HeroSection>
      <Container>
        <Title>
          Seja aluno <span>Panobianco</span>
        </Title>
        <SubTitle>Sem taxas e amarras! Conheça nossas unidades</SubTitle>
        <Button href="#">Matricule-se</Button>
      </Container>
    </HeroSection>
  );
}
