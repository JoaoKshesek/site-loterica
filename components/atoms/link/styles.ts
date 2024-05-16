import styled from "styled-components";

export const LinkContent = styled.a`
  color: var(--tints_primary_100);
  font-family: var(--font_primary);
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0em;
  text-decoration: none;
  transition: all ease-in 100ms;

  &:hover {
    cursor: pointer;
    color: var(--tints_primary_100);
  }
`;
