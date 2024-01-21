import styled from "@emotion/styled";

export const InformText = styled.p`
  ${({ theme }) => theme.text.body2}
  color: ${({ theme }) => theme.colors.gray[600]};
`;
export const ImportantText = styled.span`
  font-weight: 700;
  font-size: 12px;
`;

export const ButtonContainer = styled.div`
  margin: 18px 0 16px;
`;

export const InputContainer = styled.div`
  margin: 32px 0 16px;
`;
