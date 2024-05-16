import { ReactNode } from "react";
import { ButtonRootContainer } from "./styles";

interface ButtonRootProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: VariantProps["variant"];
  type?: "button" | "submit" | "reset";
  color?: string;
  disabled?: boolean;
}

type Variant =
  | "primary"
  | "secondary";

export interface VariantProps {
  variant: Variant;
}

export function ButtonRoot({
  children,
  onClick,
  variant,
  type,
  disabled,
}: ButtonRootProps) {
  const variantDefault = "primary";

  return (
    <ButtonRootContainer
      variant={variant ?? variantDefault}
      onClick={onClick}
      type={type}
      disabled={disabled ?? false}
    >
      {children}
    </ButtonRootContainer>
  );
}
