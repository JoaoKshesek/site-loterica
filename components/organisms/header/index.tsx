import Image from "next/image";
import { Container, Link } from "@/components";
import {
  Wrapper,
  HeaderContainer,
  GamesContainer,
  GameButton,
  GameLink,
  GamesBlock,
  ButtonsContainer,
  CartContainer,
  ProfileContainer,
  ProfileLinks,
  LogoutButton,
  ProfileContent,
} from "./styles";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/libs";
import { useSignOutMutation } from "@/store/queries/authApi";
import { clearUser } from "@/store/reducers/commom/auth";

interface Contest {
  next_contest: string;
  next_date: string;
}

interface Game {
  id: number;
  title: string;
  slug: string;
  color: string;
  contest: Contest;
}

export function Header() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [signOutRequest] = useSignOutMutation();
  const games: Game[] = [
    {
      id: 1,
      title: "Mega-Sena",
      slug: "mega-sena",
      color: "#43B77B",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
    },
    {
      id: 2,
      title: "Quina",
      slug: "quina",
      color: "#9C6AC4",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
    },
    {
      id: 3,
      title: "Lotofácil",
      slug: "lotofacil",
      color: "#CC7AD0",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
    },
    {
      id: 4,
      title: "Lotomania",
      slug: "lotomania",
      color: "#FE914C",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
    },
    {
      id: 5,
      title: "Timemania",
      slug: "timemania",
      color: "#F2BA2A",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
    },
    {
      id: 6,
      title: "Dupla Sena",
      slug: "dupla-sena",
      color: "#E84963",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
    },
    {
      id: 7,
      title: "Dia de Sorte",
      slug: "dia-de-sorte",
      color: "#FFAA47",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
    },
    {
      id: 8,
      title: "Super Sete",
      slug: "super-sete",
      color: "#AED153",
      contest: { next_contest: "2000", next_date: "28/05/2024" },
    },
  ];

  const user = {
    name: "João Valter Kshesek",
    credit: 354.56,
    avatar: "/assets/astronaut.png",
  };

  const handleLogout = async () => {
    await signOutRequest()
      .unwrap()
      .then(() => {
        dispatch(clearUser());
        window.location.href = "/";
      });
  };

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
          <ButtonsContainer>
            <GamesContainer>
              <GameButton>Faça seu jogo</GameButton>
              <GamesBlock>
                {games.map((game) => (
                  <GameLink
                    key={game.id}
                    onClick={() => router.push(`/jogos/${game.slug}`)}
                    style={{ color: `${game.color}` }}
                  >
                    {game.title} - {game.contest.next_date}
                  </GameLink>
                ))}
              </GamesBlock>
            </GamesContainer>
            <CartContainer>
              <Image
                priority={true}
                src={"/assets/icons/cart.svg"}
                alt="Ícone carrinho"
                height={40}
                width={40}
                onClick={() => router.push("/")}
              />
            </CartContainer>
            <ProfileContainer>
              {user ? (
                <ProfileContent>
                  <Image
                    priority={true}
                    src={user.avatar}
                    alt="Ícone usuário"
                    height={40}
                    width={40}
                  />
                  <ProfileLinks>
                    <Link url="/minha-conta" textContent={"Minha Conta"} />
                    <Link
                      url="/comprar-creditos"
                      textContent={"Comprar Créditos"}
                    />
                    <LogoutButton onClick={() => handleLogout()}>
                      Sair
                    </LogoutButton>
                  </ProfileLinks>
                </ProfileContent>
              ) : (
                <Image
                  priority={true}
                  src={"/assets/icons/user.svg"}
                  alt="Ícone usuário"
                  height={40}
                  width={40}
                  onClick={() => router.push("/entrar")}
                />
              )}
            </ProfileContainer>
          </ButtonsContainer>
        </HeaderContainer>
      </Container>
    </Wrapper>
  );
}
