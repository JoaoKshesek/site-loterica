"use client";

import { Container, Section } from "@/components";
import { SignInStoreForm } from "@/views";

export function SignInFormSection() {
  return (
    <Section>
      <Container>
        <SignInStoreForm />
      </Container>
    </Section>
  );
}
