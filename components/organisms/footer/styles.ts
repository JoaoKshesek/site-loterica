import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 0 5rem;
  position: fixed;
  bottom: 0;
  height: 10rem;
  background: var(--neutrals_dark_200);
`;

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterTextContent = styled.p`
  color: var(--neutrals_light_100);
  font-family: var(--font_primary);
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CopyrightText = styled.p`
  color: var(--neutrals_light_100);
  font-family: var(--font_primary);
`;

export const CopyrightLink = styled.a`
  color: var(--neutrals_light_100);
  font-family: var(--font_primary);
`;
