import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  position: fixed;
  top: 0;
  z-index: 900;
  background: var(--neutrals_light_200);
`;

export const HeaderContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    width: auto;
    cursor: pointer;
    transition: all ease-in 100ms;
    &:hover {
      filter: contrast(1.5);
    }
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
