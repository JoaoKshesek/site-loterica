import { ReactNode } from "react";
import { ButtonLinkRootContainer } from "./styles";
import { useRouter } from "next/navigation";

interface ButtonLinkRootProps {
  children: ReactNode;
  link: string;
  target?: boolean;
}

export function ButtonLinkRoot({
  children,
  link,
  target,
}: ButtonLinkRootProps) {
  const router = useRouter();

  const handleClick = () => {
    if (target) {
      window.open(link, "_blank");
    } else {
      router.push(link);
    }
  };

  return (
    <ButtonLinkRootContainer onClick={handleClick}>
      {children}
    </ButtonLinkRootContainer>
  );
}
