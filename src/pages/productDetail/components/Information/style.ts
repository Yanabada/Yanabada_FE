import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #fff;
`;

export const Text = styled.p`
  ${({ theme }) => theme.text.subtitle3}
`;

export const Description = styled.p`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.body2}
`;
