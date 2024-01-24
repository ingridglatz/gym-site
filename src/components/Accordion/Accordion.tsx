import { Details } from './styles';

type AccordionProps = {
  title: string;
  content: string;
};

export function Accordion({ title, content }: AccordionProps) {
  return (
    <Details>
      <summary>{title}</summary>
      <p>{content}</p>
    </Details>
  );
}
