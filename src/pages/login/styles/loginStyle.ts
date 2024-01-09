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

export const EmailLogin = styled.button`
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
