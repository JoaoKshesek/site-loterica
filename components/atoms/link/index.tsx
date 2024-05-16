import { LinkContent } from "./styles";
import { useRouter } from "next/navigation";

interface ButtonLinkRootProps {
  textContent: string;
  url: string;
  target?: boolean;
}

export function Link({ textContent, url, target }: ButtonLinkRootProps) {
  const router = useRouter();

  const handleClick = () => {
    if (target) {
      window.open(url, "_blank");
    } else {
      router.push(url);
    }
  };

  return <LinkContent onClick={handleClick}>{textContent}</LinkContent>;
}
