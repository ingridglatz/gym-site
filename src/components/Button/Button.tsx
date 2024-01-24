import { ButtonStyled } from './styles';

type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
};

export function Button({ children, href, target }: ButtonProps) {
  return (
    <ButtonStyled href={href} target={target}>
      {children}
    </ButtonStyled>
  );
}
