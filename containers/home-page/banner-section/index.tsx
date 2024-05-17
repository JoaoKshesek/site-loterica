"use client";
import Image from "next/image";
import { Container, Section } from "@/components";
import { Content } from "./styles";

export function BannerSection() {
  return (
    <Container>
      <Section>
        <Content>
          <Image
            src={"/assets/banner.png"}
            height={300}
            width={1440}
            alt="Banner"
          />
        </Content>
      </Section>
    </Container>
  );
}
