import React, { useState } from "react";
import { Controller, Control, Path, FieldValues } from "react-hook-form";
import {
  ControlledInputContainer,
  InputContainer,
  Input,
  Label,
  ErrorMessage,
} from "../styles";
import Image from "next/image";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  errorMessage?: string;
  label: string;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
};

export function ControlledPasswordInput<T extends FieldValues>({
  name,
  control,
  label,
  errorMessage,
  ...inputProps
}: Props<T> & InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ControlledInputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <InputContainer>
            <Input
              id={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              type={showPassword ? "text" : "password"}
              {...inputProps}
            />
            <Image
              src={`../assets/icons/visibility-${
                showPassword ? "on" : "off"
              }.svg`}
              width={20}
              height={20}
              alt="Ícone botão"
              onClick={() => setShowPassword(!showPassword)}
            />
          </InputContainer>
        )}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ControlledInputContainer>
  );
}
