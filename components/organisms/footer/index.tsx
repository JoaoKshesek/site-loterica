import { Container, Link } from "@/components";
import { Wrapper, Copyright, CopyrightText } from "./styles";

export function Footer() {
  return (
    <Wrapper>
      <Link url="/" textContent={"Home"} />
      <Link url="/dashboard" textContent={"Dashboard"} />

      <Container>
        <Copyright>
          <CopyrightText>
            SIGNOTECH. Todos os direitos reservados.
          </CopyrightText>
        </Copyright>
      </Container>
    </Wrapper>
  );
}
