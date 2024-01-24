import { Container } from './styles';

type SectionProps = {
  children: React.ReactNode;
};

export function Section({ children }: SectionProps) {
  return <Container>{children}</Container>;
}
