import Image from "next/image";
import { useRouter } from "next/navigation";
import { CreditCardContainer } from "./styles";

interface Credit {
  id: number;
  title: string;
  slug: string;
}

export function CreditCard() {
  const router = useRouter();

  return <CreditCardContainer></CreditCardContainer>;
}
