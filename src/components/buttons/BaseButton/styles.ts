import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface BaseButtonProps {
  width?: string;
}

const ButtonLayout = css`
  display: flex;
  height: 40px;
  padding-right: 9px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

// FIXME: 모듈화
const BoldTextLayout = css`
  /* [Button1] 버튼진하게 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; /* 140% */
`;

// FIXME: 모듈화
export const NormalTextLayout = css`
  /* [Button2] 일반버튼 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 140% */
`;

const DisabledButtonLayout = css`
  ${ButtonLayout}
  cursor: not-allowed;
`;

export const LightColoredButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${BoldTextLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blue[50]};

  color: ${({ theme }) => theme.colors.blue[400]};
  text-align: center;
`;

export const IconButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${BoldTextLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blue[200]};

  color: #fff;
  text-align: center;
`;

export const DefaultButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${BoldTextLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blue[200]};

  color: #fff;
  text-align: center;
`;

export const TransparentButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${NormalTextLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};

  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;
`;

export const GrayColoredButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${NormalTextLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray[100]};

  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;
`;

export const KakaoButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${NormalTextLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: #fee502;

  color: #000;
  text-align: center;
`;

export const NaverButton = styled.button<BaseButtonProps>`
  ${ButtonLayout}
  ${NormalTextLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: #03c73c;

  color: #000;
  text-align: center;
`;

export const DisabledLightColoredButton = styled.button<BaseButtonProps>`
  ${DisabledButtonLayout}
  ${BoldTextLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray[100]};

  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;
`;

export const DisabledDefaultButton = styled.button<BaseButtonProps>`
  ${DisabledButtonLayout}
  ${BoldTextLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray[500]};

  color: #fff;
  text-align: center;
`;

export const DisabledIconButton = styled.button<BaseButtonProps>`
  ${DisabledButtonLayout}
  ${BoldTextLayout}
  width: ${({ width }) => width || "332px"};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray[500]};

  color: #fff;
  text-align: center;
`;
