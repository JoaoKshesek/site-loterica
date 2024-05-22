import Image from "next/image";
import { Container, Link } from "@/components";
import {
  Wrapper,
  Copyright,
  CopyrightText,
  FooterContainer,
  FooterContent,
  PaymentForms,
  LinksContainer,
  LinksContent,
  LinksContentTitle,
  SocialMediaLink,
  SocialMediaContainer,
  PaymentFormText,
  FooterDivider,
  CopyrightSecurity,
} from "./styles";
import { useRouter } from "next/navigation";

interface Game {
  id: number;
  title: string;
  slug: string;
}

export function Footer() {
  const router = useRouter();
  const games: Game[] = [
    { id: 1, title: "Mega-Sena", slug: "mega-sena" },
    { id: 2, title: "Quina", slug: "quina" },
    { id: 3, title: "Lotofácil", slug: "lotofacil" },
    { id: 4, title: "Lotomania", slug: "lotomania" },
    { id: 5, title: "Timemania", slug: "timemania" },
    { id: 6, title: "Dupla Sena", slug: "dupla-sena" },
    { id: 7, title: "Dia de Sorte", slug: "dia-de-sorte" },
    { id: 8, title: "Super Sete", slug: "super-sete" },
  ];

  return (
    <Wrapper>
      <Container>
        <FooterContainer>
          <Image
            priority={true}
            src={"/assets/logo.svg"}
            alt="Logo Lotérica"
            height={125}
            width={229}
            onClick={() => router.push("/")}
          />
          <FooterContent>
            <PaymentForms>
              <PaymentFormText>formas de pagamento</PaymentFormText>
              <Image
                priority={true}
                src={"/assets/payment-forms.png"}
                alt="Formas de Pagamento"
                height={44}
                width={313}
              />
            </PaymentForms>
            <FooterDivider />
            <LinksContainer>
              <LinksContent>
                <LinksContentTitle>Minha conta</LinksContentTitle>
                <Link url="/entrar" textContent={"Entrar"} />
                <Link url="/cadastre-se" textContent={"Cadastre-se"} />
                <Link url="/minha-conta" textContent={"Minha conta"} />
                <Link
                  url="/politica-de-privacidade"
                  textContent={"Política de Privacidade"}
                />
                <Link url="/termos-de-uso" textContent={"Termos de Uso"} />
              </LinksContent>
              <LinksContent>
                <LinksContentTitle>Saiba mais</LinksContentTitle>
                <Link url="/sobre" textContent={"Sobre"} />
                <Link url="/como-apostar" textContent={"Como apostar"} />
                <Link
                  url="/premiacao-do-mes"
                  textContent={"Premiação do mês"}
                />
                <Link
                  url="/central-de-ajuda"
                  textContent={"Central de Ajuda"}
                />
                <Link url="/suporte" textContent={"Suporte"} />
              </LinksContent>
              <LinksContent>
                <LinksContentTitle>Loterias</LinksContentTitle>
                {games.map((game) => (
                  <Link
                    key={game.id}
                    url={`/jogos/${game.slug}`}
                    textContent={game.title}
                  />
                ))}
              </LinksContent>
              <LinksContent className="social-media">
                <LinksContentTitle>Redes sociais</LinksContentTitle>
                <SocialMediaContainer>
                  <SocialMediaLink
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <Image
                      src={"/assets/icons/instagram.svg"}
                      width={24}
                      height={24}
                      alt="Ícone Instagram"
                    />
                  </SocialMediaLink>
                  <SocialMediaLink
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <Image
                      src={"/assets/icons/whatsapp.svg"}
                      width={24}
                      height={24}
                      alt="Ícone WhatsApp"
                    />
                  </SocialMediaLink>
                  <SocialMediaLink
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <Image
                      src={"/assets/icons/facebook.svg"}
                      width={12}
                      height={24}
                      alt="Ícone Facebook"
                    />
                  </SocialMediaLink>
                </SocialMediaContainer>
              </LinksContent>
            </LinksContainer>
          </FooterContent>
        </FooterContainer>
        <FooterDivider />
        <Copyright>
          <CopyrightText>
            2024. &copy; sualotericaonline.com.br - Todos os direitos
            reservados.
          </CopyrightText>
          <CopyrightSecurity>
            <CopyrightText>Plataforma: Sua Lotérica Online</CopyrightText>
            <Image
              src={"/assets/icons/shield.svg"}
              width={60}
              height={49}
              alt="Ícone Escudo"
            />
          </CopyrightSecurity>
        </Copyright>
      </Container>
    </Wrapper>
  );
}
