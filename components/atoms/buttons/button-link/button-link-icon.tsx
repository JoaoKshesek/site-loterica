import Image from "next/image";

interface ButtonLinkIconProps {
  url: string;
  size: number;
}

export function ButtonLinkIcon({ url, size }: ButtonLinkIconProps) {
  return <Image src={url} width={size} height={size} alt="Ícone botão" />;
}
