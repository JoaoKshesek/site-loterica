import * as React from "react";
import { Controller, Control, Path, FieldValues } from "react-hook-form";
import {
  ControlledInputContainer,
  Input,
  Label,
  ErrorMessage,
  InputContainer,
} from "../styles";
import Image from "next/image";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  errorMessage?: string;
  label?: string;
  clearButton?: boolean;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
};

export function ControlledInput<T extends FieldValues>({
  name,
  control,
  label,
  clearButton,
  errorMessage,
  ...inputProps
}: Props<T> & InputProps) {
  const handleClear = () => {
    control._reset({ [name as string]: "" } as T);
  };

  return (
    <ControlledInputContainer>
      {label && <Label htmlFor={name}>{label}</Label>}
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
              {...inputProps}
            />
            {clearButton && (
              <Image
                src={"../assets/icons/close-blue.svg"}
                width={20}
                height={20}
                alt="Ícone limpar"
                onClick={handleClear}
              />
            )}
          </InputContainer>
        )}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ControlledInputContainer>
  );
}
