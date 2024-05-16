import Image from "next/image";
import { Container, Link } from "@/components";
import { Wrapper, HeaderContainer, FooterContent } from "./styles";
import { useRouter } from "next/navigation";

interface Game {
  id: number;
  title: string;
  slug: string;
}

export function Header() {
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
        <HeaderContainer>
          <Image
            priority={true}
            src={"/assets/logo-small.svg"}
            alt="Logo Lotérica"
            height={56}
            width={170}
            onClick={() => router.push("/")}
          />
        </HeaderContainer>
      </Container>
    </Wrapper>
  );
}
