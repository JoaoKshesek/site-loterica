import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  GameAmount,
  GameButton,
  GameCardContainer,
  GameCardContent,
  GameCardContentInfo,
  GameContest,
  GameNextContest,
  GameContestDate,
  GameSpanTag,
  GameSpanTagText,
  GameTitle,
} from "./styles";

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

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const router = useRouter();

  return (
    <GameCardContainer game_color={game.color}>
      {!game.accumulated && <GameSpanTag ><GameSpanTagText game_color={game.color}>Acumulou!</GameSpanTagText></GameSpanTag>}
      <GameCardContent game_color={game.color}>
        <GameCardContentInfo>
          <GameTitle>{game.title}</GameTitle>
          <GameAmount>{game.amount.formatted}</GameAmount>
          <GameContest>
            <GameNextContest>{game.contest.next_contest}</GameNextContest>-
            <GameContestDate>{game.contest.next_date}</GameContestDate>
          </GameContest>
        </GameCardContentInfo>
        <GameButton
          game_color={game.color}
          onClick={() => router.push(`/jogos/${game.slug}`)}
        >
          Faça seu jogo{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.81934 15.0591L12.5754 10.3031L7.81934 5.547"
              stroke={game.color}
              stroke-width="1.77885"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </GameButton>
      </GameCardContent>
    </GameCardContainer>
  );
}
