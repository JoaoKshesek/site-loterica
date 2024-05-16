import styled from "styled-components";

export const ButtonLinkRootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-decoration: none;
  transition: all ease-in 100ms;

  &:hover {
    cursor: pointer;
    color: var(--tints_primary_100);
  }

  &:hover svg {
    fill: var(--tints_primary_100);
    stroke: var(--tints_primary_100);
  }
`;

export const ButtonLinkContentText = styled.p`
  color: var(--tints_primary_100);
  font-family: var(--font_primary);

  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0em;
`;
