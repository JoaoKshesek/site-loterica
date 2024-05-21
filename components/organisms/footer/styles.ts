import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 3.6rem 0 5rem;
  background: var(--neutrals_light_200);
`;

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  gap: 6rem;
  align-items: flex-start;
  > img {
    height: auto;
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

export const FooterDivider = styled.hr`
  width: 100%;
  height: 0.1px;
  background: var(--neutrals_gray_200);
  margin: 4rem 0;
`;

export const PaymentForms = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  > img {
    height: auto;
  }
`;

export const PaymentFormText = styled.p`
  color: var(--tints_secondary_100);
  font-family: var(--font_primary);
  font-size: 2rem;
  line-height: 150%;
  text-transform: uppercase;
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LinksContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const LinksContentTitle = styled.h4`
  color: var(--tints_primary_100);
  font-family: var(--font_primary);
  font-size: 2rem;
  line-height: 150%;
  text-transform: uppercase;
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  transition: all ease-in 100ms;
  &:hover img {
    transform: scale(1.1);
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CopyrightSecurity = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  > img {
    height: auto;
  }
`;

export const CopyrightText = styled.p`
  color: var(--neutrals_gray_400);
  font-family: var(--font_primary);
  font-size: 1.4rem;
`;
