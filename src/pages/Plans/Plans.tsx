import { Layout } from '../../components/Layout';
import { Section } from '../../components/Section';
import { Title } from '../../components/Title';
import { Plan } from './components/Plan';
import { Container, PlansContainer } from './styles';

export function Plans() {
  return (
    <Layout>
      <Container>
        <Section>
          <Title>
            Seja um <span>Aluno</span> <br />
            Conheça nossos planos
          </Title>
          <PlansContainer>
            <Plan title="Gold" price={99} features={['Musculação', 'Natação', 'Crossfit']} />
            <Plan
              title="Platinum"
              price={120}
              features={['Tudo do Gold', 'Treine onde estiver', 'Spinning', 'Fit Dance']}
              recommended
            />
          </PlansContainer>
        </Section>
      </Container>
    </Layout>
  );
}
