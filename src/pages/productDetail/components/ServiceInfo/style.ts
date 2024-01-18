import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #fff;
`;

export const Text = styled.p`
  ${({ theme }) => theme.text.subtitle3}
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({ theme }) => theme.text.subtitle5}
`;

export const OptionInnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: start;
  gap: 0.7rem;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const OptionTextContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.subtitle5}
`;
