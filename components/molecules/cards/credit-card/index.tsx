import Image from "next/image";
import {
  CreditCardContainer,
  CreditCardTag,
  CreditCardTags,
  CreditCardTitle,
} from "./styles";
import { ButtonLink } from "@/components";

export function CreditCard() {
  const tags = [{ title: "Rápido" }, { title: "Rápido" }, { title: "Rápido" }];

  return (
    <CreditCardContainer>
      <CreditCardTitle>Compre seus créditos</CreditCardTitle>
      <CreditCardTags>
        {tags.map((tag, index) => (
          <CreditCardTag key={index}>
            <Image
              src={"/assets/icons/check-circle.svg"}
              width={20}
              height={20}
              alt="Ícone seta direita"
            />
            {tag.title}
          </CreditCardTag>
        ))}
      </CreditCardTags>
      <ButtonLink.Root link={"/comprar-creditos"}>
        <ButtonLink.Content textContent="comprar agora" />
        <ButtonLink.Icon url="/assets/icons/chevron-right.svg" size={20} />
      </ButtonLink.Root>
    </CreditCardContainer>
  );
}
