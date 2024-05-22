"use client";

import { Container, CreditCard, GameCard, Section } from "@/components";
import { GameCardsContainer, MainCardsContainer, TitleText } from "./styles";

interface Amount {
  original: number;
  formatted: string;
}

interface Contest {
  next_contest: string;
  next_date: string;
}

interface Game {
  id: number;
  title: string;
  slug: string;
  color: string;
  amount: Amount;
  contest: Contest;
  accumulated: boolean;
}

export function HomeGamesSection() {
  const games: Game[] = [
    {
      id: 1,
      title: "Mega-Sena",
      slug: "mega-sena",
      color: "#1BB565",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
      amount: { original: 50000.0, formatted: "R$5.000.000,00" },
      accumulated: true,
    },
    {
      id: 2,
      title: "Quina",
      slug: "quina",
      color: "#9C6AC4",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
      amount: { original: 50000.0, formatted: "R$5.000.000,00" },
      accumulated: false,
    },
    {
      id: 3,
      title: "Lotofácil",
      slug: "lotofacil",
      color: "#CC7AD0",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
      amount: { original: 50000.0, formatted: "R$5.000.000,00" },
      accumulated: false,
    },
    {
      id: 4,
      title: "Lotomania",
      slug: "lotomania",
      color: "#FE914C",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
      amount: { original: 50000.0, formatted: "R$5.000.000,00" },
      accumulated: false,
    },
    {
      id: 5,
      title: "Timemania",
      slug: "timemania",
      color: "#F2BA2A",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
      amount: { original: 50000.0, formatted: "R$5.000.000,00" },
      accumulated: false,
    },
    {
      id: 6,
      title: "Dupla Sena",
      slug: "dupla-sena",
      color: "#E84963",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
      amount: { original: 50000.0, formatted: "R$5.000.000,00" },
      accumulated: false,
    },
    {
      id: 7,
      title: "Dia de Sorte",
      slug: "dia-de-sorte",
      color: "#FFAA47",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
      amount: { original: 50000.0, formatted: "R$5.000.000,00" },
      accumulated: false,
    },
    {
      id: 8,
      title: "Super Sete",
      slug: "super-sete",
      color: "#AED153",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
      amount: { original: 50000.0, formatted: "R$5.000.000,00" },
      accumulated: false,
    },
  ];

  const [mainGame, ...otherGames] = games;

  return (
    <Section>
      <Container>
        <TitleText>Confie na sua sorte, comece apostando agora!</TitleText>
        <MainCardsContainer>
          <GameCard key={mainGame.id} game={mainGame} card_type={"main"} />
          <CreditCard />
        </MainCardsContainer>
        <GameCardsContainer>
          {otherGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </GameCardsContainer>
      </Container>
    </Section>
  );
}
