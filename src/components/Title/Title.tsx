import { Container } from './styles';

type TitleProps = {
  children: React.ReactNode;
};

export function Title({ children }: TitleProps) {
  return <Container>{children}</Container>;
}
