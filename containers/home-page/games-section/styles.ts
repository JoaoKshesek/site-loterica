import styled from "styled-components";

export const TitleText = styled.h1`
  color: var(--tints_primary_100);
  font-family: var(--font_primary);
  font-size: 3.2rem;
  line-height: auto;
  text-transform: uppercase;
  text-align: center;
`;

export const MainCardsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap:3%;
`;

export const GameCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap:3%;
`;