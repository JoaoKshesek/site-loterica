import { ButtonLinkContentText } from "./styles";

interface ButtonLinkContentProps {
  textContent: string;
}

export function ButtonLinkContent({ textContent }: ButtonLinkContentProps) {
  return <ButtonLinkContentText>{textContent}</ButtonLinkContentText>;
}
