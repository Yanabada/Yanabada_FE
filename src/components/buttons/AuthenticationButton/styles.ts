import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ButtonLayout = css`
  display: flex;
  width: 332px;
  height: 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const LightAuthenticationButton = styled.button`
  ${ButtonLayout}
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const DefaultAuthenticationButton = styled.button`
  ${ButtonLayout}
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const AbledAuthenticationButton = styled.button`
  ${ButtonLayout}
  border-radius: 5px;
  border: 1px ${({ theme }) => theme.colors.gray[700]};
  background: ${({ theme }) => theme.colors.gray[200]};
`;

export const DisAbledAuthenticationButton = styled.button`
  ${ButtonLayout}
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.blue[200]};

  color: ${({ theme }) => theme.colors.blue[200]};
`;
