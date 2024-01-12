import styled from "@emotion/styled";

export const SectionDescriptionWrapper = styled.div`
  display: flex;
  width: 360px;
  height: 48px;
  padding: 0px 14px;
  align-items: center;
  flex-shrink: 0;

  background: ${({ theme }) => theme.colors.gray[200]};
`;

export const MessageWrapper = styled.div`
  display: flex;
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
  flex: 1 0 0;

  border-radius: 5px;
`;

export const MessageText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;
