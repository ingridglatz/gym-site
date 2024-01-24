import { Accordion } from '../../components/Accordion';
import { AccordionContainer } from '../../components/AccordionContainer';
import { Layout } from '../../components/Layout';
import { Section } from '../../components/Section';
import { Title } from '../../components/Title';
import { Container } from './styles';

export function FAQ() {
  return (
    <Layout>
      <Container>
        <Section>
          <Title>Perguntas frequentes</Title>
          <AccordionContainer>
            <Accordion
              title="Quais são os métodos de pagamentos?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam similique distinctio tenetur asperiores quod voluptas iusto recusandae doloremque. Nesciunt tempore eum suscipit nisi atque est molestias. Asperiores, ea aliquam."
            />
            <Accordion
              title="Como cancelar o meu plano?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam similique distinctio tenetur asperiores quod voluptas iusto recusandae doloremque. Nesciunt tempore eum suscipit nisi atque est molestias. Asperiores, ea aliquam."
            />
            <Accordion
              title="Quais unidades posso utilizar?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam similique distinctio tenetur asperiores quod voluptas iusto recusandae doloremque. Nesciunt tempore eum suscipit nisi atque est molestias. Asperiores, ea aliquam."
            />
          </AccordionContainer>
        </Section>
      </Container>
    </Layout>
  );
}
