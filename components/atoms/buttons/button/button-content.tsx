import { ButtonContentText } from "./styles";

interface ButtonContentProps {
  textContent: string;
}

export function ButtonContent({ textContent }: ButtonContentProps) {
  return <ButtonContentText>{textContent}</ButtonContentText>;
}
