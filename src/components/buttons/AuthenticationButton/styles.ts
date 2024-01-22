import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface AuthenticationButtonProps {
  width?: string;
  height?: string;
  lineHeight?: string;
}

const ButtonLayout = css`
  display: flex;
  height: 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const LightAuthenticationButton = styled.button<AuthenticationButtonProps>`
  ${ButtonLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const DefaultAuthenticationButton = styled.button<AuthenticationButtonProps>`
  ${ButtonLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const AbledAuthenticationButton = styled.button<AuthenticationButtonProps>`
  ${ButtonLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  border: 1px ${({ theme }) => theme.colors.gray[700]};
  background: ${({ theme }) => theme.colors.gray[200]};
`;

export const DisAbledAuthenticationButton = styled.button<AuthenticationButtonProps>`
  ${ButtonLayout}
  width: ${({ width }) => width || "332px"};
  height: ${({ height }) => height || "28px"};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.blue[200]};

  color: ${({ theme }) => theme.colors.blue[200]};
`;
