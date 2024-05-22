import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  position: fixed;
  top: 0;
  z-index: 900;
  background: var(--neutrals_light_200);
`;

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    height: auto;
    cursor: pointer;
    transition: all ease-in 100ms;
    &:hover {
      filter: contrast(1.5);
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const GamesContainer = styled.div`
  width: 24rem;
  position: relative;
  &:hover > div,
  div:hover {
    display: flex;
  }
`;

export const GameButton = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-radius: 1rem;
  background: var(--tints_secondary_100);
  color: var(--neutrals_light_100);
  text-align: center;
  font-family: var(--font_primary);
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const GamesBlock = styled.div`
  width: 24rem;
  position: absolute;
  top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;
  border-radius: 1rem;
  background: var(--neutrals_light_100);
  display: none;
`;

export const GameLink = styled.a`
  font-family: var(--font_primary);
  font-size: 1.5rem;
  font-weight: 500;
  transition: all ease-in 100ms;
  &:hover {
    cursor: pointer;
    filter: contrast(1.5);
  }
`;

export const CartContainer = styled.div`
  > img {
    transition: all ease-in 100ms;
    &:hover {
      cursor: pointer;
      filter: brightness(2);
    }
  }
`;

export const ProfileContainer = styled.div`
  > img {
    transition: all ease-in 100ms;
    &:hover {
      cursor: pointer;
      filter: brightness(2);
    }
  }
`;

export const ProfileContent = styled.div`
  position: relative;
  &:hover > div,
  div:hover {
    display: flex;
  }
  >img {
    border-radius: 50%;
  }
`;

export const ProfileLinks = styled.div`
  width: 16rem;
  position: absolute;
  top: 4rem;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;
  border-radius: 1rem;
  background: var(--neutrals_light_100);
  display: none;
`;

export const LogoutButton = styled.div`
  color: var(--neutrals_gray_300);
  font-family: var(--font_primary);
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0em;
  text-decoration: none;
  transition: all ease-in 100ms;

  &:hover {
    cursor: pointer;
    color: var(--tints_secondary_100);
  }
`;
