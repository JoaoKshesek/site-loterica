import styled from "styled-components";

export const ButtonLinkRootContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 1rem;
  background: var(--tints_secondary_100);
  transition: all ease-in 100ms;

  &:hover {
    cursor: pointer;
    filter: contrast(1.5);
  }
`;

export const ButtonLinkContentText = styled.p`
  color: var(--neutrals_light_100);
  font-family: var(--font_primary);
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
`;
