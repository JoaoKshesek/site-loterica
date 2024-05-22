import styled from "styled-components";

interface GameCardContainerProps {
  game_color?: string;
  main_card?:boolean
}

export const GameCardContainer = styled.div<GameCardContainerProps>`
  position: relative;
  width: ${props => (props.main_card ? "100%" : "22%")};
  margin-top: ${props => (props.main_card ? "0" : "3rem")};
  padding-top: 3rem;
`;

export const GameSpanTag = styled.div`
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
  height: ${props => (props.main_card ? "20rem" : "auto")};
  display: flex;
  flex-direction: ${props => (props.main_card ? "row" : "column")};
  align-items: ${props => (props.main_card ? "center" : "flex-start")};
  justify-content: ${props => (props.main_card ? "space-between" : "flex-start")};
  gap: 2rem;
  padding: ${props => (props.main_card ? "3.8rem 6.4rem 3.8rem 3.2rem " : "1.6rem 2rem")};
  border-radius: 1rem;
  background: ${(props) => props.game_color};
`;

export const GameCardContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const GameTitle = styled.div<GameCardContainerProps>`
  color: var(--neutrals_light_100);
  font-family: var(--font_primary);
  font-size: ${props => (props.main_card ? "3rem" : "2rem")};
  font-weight: 600;
  text-transform: uppercase;
`;

export const GameAmount = styled.div<GameCardContainerProps>`
  color: var(--neutrals_light_100);
  font-family: var(--font_primary);
  font-size: ${props => (props.main_card ? "3.6rem" : "2.4rem")};
  font-weight: 600;
`;

export const GameContest = styled.p<GameCardContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--neutrals_light_100);
  font-family: var(--font_primary);
  font-size: ${props => (props.main_card ? "2rem" : "1.4rem")};
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
  width: ${props => (props.main_card ? "28rem" : "100%")};
  height: ${props => (props.main_card ? "6rem" : "4rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 0.6rem;
  background: var(--neutrals_light_100);
  color: ${(props) => props.game_color};
  font-family: var(--font_primary);
  font-size: ${props => (props.main_card ? "1.8rem" : "1.4rem")};
  font-weight: 700;
  text-transform: uppercase;
  transition: all ease-in 100ms;

  &:hover {
    cursor: pointer;
    filter: contrast(1.5);
  }
`;
