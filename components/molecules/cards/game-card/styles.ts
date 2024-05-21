import styled from "styled-components";

interface GameCardContainerProps {
  game_color: string;
}

export const GameCardContainer = styled.div<GameCardContainerProps>`
  max-width: 23%;
  padding-top: 3rem;
  position: relative;
`;

export const GameSpanTag = styled.div<GameCardContainerProps>`
  position: absolute;
  top: 0;
  z-index: -1;
  border-radius: 1rem 1rem 0 0;
  background: var(--neutrals_dark_100);
`;

export const GameSpanTagText = styled.div<GameCardContainerProps>`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  width: 15rem;
  height: 4rem;
  border-radius: 1rem 1rem 0 0;
  background: ${(props) => props.game_color + "AA"};
  color: var(--neutrals_light_100);
  font-family: var(--font_primary);
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const GameCardContent = styled.div<GameCardContainerProps>`
  background: ${(props) => props.game_color};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.6rem 2rem;
  border-radius: 1rem;
`;
export const GameCardContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const GameTitle = styled.div`
  color: var(--neutrals_light_100);
  font-family: var(--font_primary);
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const GameAmount = styled.div`
  color: var(--neutrals_light_100);
  font-family: var(--font_primary);
  font-size: 2.4rem;
  font-weight: 600;
`;

export const GameContest = styled.p`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--neutrals_light_100);
  font-family: var(--font_primary);
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 500;
`;

export const GameNextContest = styled.strong`
  font-weight: 600;
`;

export const GameContestDate = styled.small`
  font-weight: 500;
`;

export const GameButton = styled.div<GameCardContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 1rem;
  background: var(--neutrals_light_100);
  color: ${(props) => props.game_color};
  font-family: var(--font_primary);
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: all ease-in 100ms;

  &:hover {
    cursor: pointer;
    filter: contrast(1.5);
  }
`;
