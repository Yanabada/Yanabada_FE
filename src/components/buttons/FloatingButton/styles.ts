import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface FloatingButtonProps {
  width?: string;
}

const ButtonLayout = css`
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  color: #fff;
  text-align: center;

  > svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

const DisabledButtonLayout = css`
  ${ButtonLayout}
  cursor: not-allowed;
`;

export const AbledFloatingButton = styled.button<FloatingButtonProps>`
  ${ButtonLayout}
  width: ${({ width }) => width || "360px"};

  ${({ theme }) => theme.text.button1};

  background: ${({ theme }) => theme.colors.blue[200]};
`;

export const DisabledFloatingButton = styled.button<FloatingButtonProps>`
  ${DisabledButtonLayout}
  width: ${({ width }) => width || "360px"};

  ${({ theme }) => theme.text.button1};

  background: ${({ theme }) => theme.colors.gray[500]};
`;
