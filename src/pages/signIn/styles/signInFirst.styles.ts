import styled from "@emotion/styled";

export const InformText = styled.p`
  ${({ theme }) => theme.text.body2}
  color: ${({ theme }) => theme.colors.gray[600]};
`;
export const ImportantText = styled.span`
  background-color: red;
`;
