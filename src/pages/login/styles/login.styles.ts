import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 144px 0 312px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.body2}
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 32px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0 15px;
  gap: 9px;
`;

export const BtnFlex = styled.button`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.button2}

  svg {
    transition: 0.5s;
  }
  &:hover {
    svg {
      transform: translateX(5px);
    }
  }
`;

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
