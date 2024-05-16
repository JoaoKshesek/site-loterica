import Image from "next/image";

interface ButtonIconProps {
  url: string;
  size: number;
}

export function ButtonIcon({ url, size }: ButtonIconProps) {
  return <Image src={url} width={size} height={size} alt="Ícone botão" />;
}
