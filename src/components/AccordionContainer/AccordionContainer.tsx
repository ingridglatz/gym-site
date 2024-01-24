import { Accordion } from '../Accordion';
import { Container } from './styles';

type AccordionProps = {
  children: React.ReactElement<typeof Accordion>[];
};

export function AccordionContainer({ children }: AccordionProps) {
  return <Container>{children}</Container>;
}
