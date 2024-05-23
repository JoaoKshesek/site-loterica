import styled from "styled-components";

export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  padding: 3rem;
  border-radius: 1rem;
  border: 1px solid var(--neutrals_gray_100);
  background: var(--neutrals_light_100);
  margin-top: 3rem;
  width: 35%;
  height: 20rem;
`;

export const CreditCardTitle = styled.h3`
  color: var(--tints_primary_100);
  font-family: var(--font_primary);
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const CreditCardTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CreditCardTag = styled.p`
  color: var(--tints_secondary_100);
  font-family: var(--font_primary);
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
