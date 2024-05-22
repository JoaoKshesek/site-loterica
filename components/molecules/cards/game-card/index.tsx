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
  card_type?: string;
}

export function GameCard({ game, card_type }: GameCardProps) {
  const router = useRouter();

  return (
    <GameCardContainer $game_color={game.color} $card_type={card_type}>
      {game.accumulated && (
        <GameSpanTag>
          <GameSpanTagText $game_color={game.color}>Acumulou!</GameSpanTagText>
        </GameSpanTag>
      )}
      <GameCardContent $game_color={game.color} $card_type={card_type}>
        <GameCardContentInfo>
          <GameTitle $card_type={card_type}>{game.title}</GameTitle>
          <GameAmount $card_type={card_type}>{game.amount.formatted}</GameAmount>
          <GameContest $card_type={card_type}>
            <GameNextContest>{game.contest.next_contest}</GameNextContest>-
            <GameContestDate>{game.contest.next_date}</GameContestDate>
          </GameContest>
        </GameCardContentInfo>
        <GameButton
          $game_color={game.color}
          $card_type={card_type}
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
              strokeWidth="1.77885"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </GameButton>
      </GameCardContent>
    </GameCardContainer>
  );
}
