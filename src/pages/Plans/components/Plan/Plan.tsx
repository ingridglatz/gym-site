import { Button } from '../../../../components/Button';
import { Container, RecommendedPlan } from './styles';

type PlanProps = {
  title: string;
  price: number;
  features: string[];
  recommended?: boolean;
};

export function Plan({ title, price, features, recommended }: PlanProps) {
  return (
    <Container data-recommended={recommended}>
      {recommended && <RecommendedPlan>Recomendado</RecommendedPlan>}
      <h2>{title}</h2>
      <span>R$ {price}</span>
      <div>
        {features.map((feature) => (
          <span>{feature}</span>
        ))}
      </div>
      <Button>Escolher</Button>
    </Container>
  );
}
