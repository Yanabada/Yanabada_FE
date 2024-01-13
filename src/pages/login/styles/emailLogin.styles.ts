import styled from "@emotion/styled";

export const EmailLoginContainer = styled.div`
  padding: 32px 14px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0 0 36px;
`;

export const BtnFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0 0;
  gap: 15px;
  color: ${({ theme }) => theme.colors.gray[300]};
`;
