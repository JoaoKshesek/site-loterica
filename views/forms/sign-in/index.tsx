import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import yup from "@/configs/yup";
import { authApi, useSignInMutation } from "@/store/queries/authApi";
import { Button, ControlledInput, ControlledPasswordInput } from "@/components";
import { Form } from "../styles";
import { useAppDispatch } from "@/libs";

interface FieldValues {
  email: string;
  password: string;
}

const schemaToCreate = yup.object().shape({
  email: yup.string().email().max(255).required().label("E-mail"),
  password: yup.string().max(100).required().label("Senha"),
});

const defaultValues: FieldValues = {
  email: "",
  password: "",
};

export function SignInStoreForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [signInRequest] = useSignInMutation();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schemaToCreate),
  });

  async function onSubmit(data: FieldValues) {
    try {
      await signInRequest(data).unwrap();
      dispatch(authApi.util.invalidateTags(["AuthenticatedUser"]));
      router.push("/");
    } catch (error: any) {
      console.log("error", error);
    }
  }

  return (
    <Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput<FieldValues>
        label="E-mail"
        name="email"
        placeholder="Insira seu e-mail"
        control={control}
        disabled={isSubmitting}
        errorMessage={errors.email?.message}
      />

      <ControlledPasswordInput<FieldValues>
        label="Senha"
        name="password"
        placeholder="Insira sua senha"
        control={control}
        disabled={isSubmitting}
        errorMessage={errors.password?.message}
      />

      <Button.Root variant="primary" type="submit">
        <Button.Content textContent={"Continuar"} />
      </Button.Root>
    </Form>
  );
};

SignInStoreForm.authGuard = false;
SignInStoreForm.getLayout = (page: ReactNode) => <div>{page}</div>;
