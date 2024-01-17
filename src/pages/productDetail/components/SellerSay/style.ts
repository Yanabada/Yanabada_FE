import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 0.875rem;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const NickNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  ${({ theme }) => theme.text.subtitle3}
`;

export const NickName = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.body2}
`;
