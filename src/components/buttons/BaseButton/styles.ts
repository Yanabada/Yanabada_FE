import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface BaseButtonProps {
  width?: string;
  buttonType?: string;
  color?: string;
  backgroundColor?: string;
}

const ButtonLayout = css`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

const DisabledButtonLayout = css`
  ${ButtonLayout}
  cursor: not-allowed;
`;

export const LightColoredButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${({ theme }) => theme.text.button1};
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blue[50]};

  color: ${({ theme }) => theme.colors.blue[400]};
  text-align: center;
`;

export const IconButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${({ theme }) => theme.text.button1};
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blue[200]};

  color: #fff;
  text-align: center;
`;

export const DefaultButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${({ theme }) => theme.text.button1};
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  color: ${({ color }) => color || "#fff"};
  background: ${({ backgroundColor }) => backgroundColor || "#38A3EB"};
  text-align: center;
`;

export const TransparentButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${({ theme }) => theme.text.button2};
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};

  color: ${({ buttonType }) =>
    (buttonType === "transparent" && "#616161") || (buttonType === "transparent-red" && "#E01F3E")};
  text-align: center;
`;

export const GrayColoredButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${({ theme }) => theme.text.button2};
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray[100]};

  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;
`;

export const KakaoButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${({ theme }) => theme.text.button2};
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: #fee502;

  color: #000;
  text-align: center;
`;

export const NaverButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${({ theme }) => theme.text.button2};
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: #03c73c;

  color: #000;
  text-align: center;
`;

export const DisabledLightColoredButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}

  ${({ theme }) => theme.text.button1};
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray[100]};

  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;
`;

export const DisabledDefaultButton = styled.button<BaseButtonProps>`
  ${DisabledButtonLayout}
  ${({ theme }) => theme.text.button1};
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray[500]};

  color: #fff;
  text-align: center;
`;

export const DisabledIconButton = styled.button<BaseButtonProps>`
  ${DisabledButtonLayout}
  ${({ theme }) => theme.text.button1};
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray[500]};

  color: #fff;
  text-align: center;
`;
