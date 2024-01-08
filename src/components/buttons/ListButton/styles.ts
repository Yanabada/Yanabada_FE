import styled from "@emotion/styled";
import { css } from "@emotion/react";

// FIXME: 모듈화
export const ButtonListLayout = css`
  /* [Subtitle6] 버튼리스트 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;

export const ListButtonWrapper = styled.div`
  display: flex;
  width: 331px;
  height: 50px;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  backdrop-filter: blur(10px);
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  ${ButtonListLayout}
  color: #000;
  text-align: center;
`;
