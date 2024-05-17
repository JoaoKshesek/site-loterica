import Image from "next/image";
import { useRouter } from "next/navigation";
import { GameCardContainer } from "./styles";

interface Game {
  id: number;
  title: string;
  slug: string;
}

export function GameCard() {
  const router = useRouter();

  return <GameCardContainer></GameCardContainer>;
}
