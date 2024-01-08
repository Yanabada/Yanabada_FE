import styled from "@emotion/styled";
import { css } from "@emotion/react";

// FIXME: 모듈화
export const NormalTextLayout = css`
  /* [Button2] 일반버튼 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 140% */
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

export const ToggleButton = styled.button`
  display: flex;
  width: 158px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};

  ${NormalTextLayout}
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue[200]};
    background: ${({ theme }) => theme.colors.gray[200]};

    ${BoldTextLayout}
    color: ${({ theme }) => theme.colors.blue[200]};
  }
`;
