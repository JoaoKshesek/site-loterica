"use client";
import { ReactNode } from "react";
import { SectionContainer } from "./styles";

interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return <SectionContainer>{children}</SectionContainer>;
}
