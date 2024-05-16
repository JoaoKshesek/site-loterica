import styled, { DefaultTheme } from "styled-components";
import { VariantProps } from "./button-root";
import { background, variant } from "styled-system";

const buttonVariants = (theme: DefaultTheme) =>
  variant({
    variants: {
      primary: {
        background: "var(--tints_green_100)"
      },
      secondary: {
        background: "var(--tints_yellow_100)"
      },
    },
  });

export const ButtonRootContainer = styled.button<VariantProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.6rem;
  border: 1px solid;
  background: none;
  ${({ theme }) => buttonVariants(theme)}
  outline:none;
  transition: all ease-in 100ms;
  &:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }
`;

export const ButtonContentText = styled.p`
  font-family: sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  line-height: normal;
`;
