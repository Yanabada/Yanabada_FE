import styled from "@emotion/styled";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SaleText = styled.p`
  color: var(--PassGreen, #028161);

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const CancelText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const DetailText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;
