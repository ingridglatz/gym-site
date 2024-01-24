import { Section } from '../../../../components/Section';
import { Service } from '../../../../components/Service';
import { Title } from '../../../../components/Title';
import { ServicesContainer } from './styles';

export function Services() {
  return (
    <Section>
      <Title>
        Conheça as <br /> nossas <span>modalidades</span>
      </Title>
      <ServicesContainer>
        <Service
          image="pilates.jpg"
          title="Pilates"
          text="Pilates é um método de exercícios físicos que utiliza o peso do próprio corpo na sua execução."
        />

        <Service
          image="musculacao.jpg"
          title="Musculação"
          text="
            Musculação é um tipo de exercício resistido, com variáveis de carga, amplitude, tempo de contração e
            velocidade controlavéis."
        />

        <Service
          image="fit-dance.jpg"
          title="Fit Dance"
          text="Fit Dance é uma modalidade de dança que mistura coreografias e ritmos variados."
        />

        <Service
          image="cardio.jpg"
          title="Spinning"
          text="Spinning é uma aula de ciclismo indoor, que simula percursos e técnicas de ciclismo de rua."
        />

        <Service image="panobianco.jpg" title="Anywhere" text="Você pode treinar em qualquer unidade da Panobianco." />

        <Service
          image="panobianco-woman.jpg"
          title="Muito mais"
          text="Além de todas as modalidades, você conta com espaço exclusivo para mulheres."
        />
      </ServicesContainer>
    </Section>
  );
}
