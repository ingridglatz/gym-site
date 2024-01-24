import { Container } from './styles';

type ServiceProps = {
  image: string;
  title: string;
  text: string;
};

export function Service({ image, title, text }: ServiceProps) {
  return (
    <Container>
      <img src={image} />
      <span>{title}</span>
      <p>{text}</p>
    </Container>
  );
}
