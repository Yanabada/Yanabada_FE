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
export const MainTextLayout = css`
  /* [body2]본문 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
`;

export const DateChangeButton = styled.button`
  display: flex;
  width: 332px;
  padding: 12px 8px;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0;
`;

export const Label = styled.p`
  ${NormalTextLayout}
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: center;
`;

export const DescriptionLabel = styled.p`
  ${MainTextLayout}
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const RightButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 5px;
`;
