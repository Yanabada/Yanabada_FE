import styled from "@emotion/styled";
import { css } from "@emotion/react";

const WrapperLayout = css`
  display: inline-block;
  width: auto;
  height: auto;
  padding: 3px 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const AbledChipWrapper = styled.div`
  ${WrapperLayout}

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: #fff;
`;

export const AbledChipText = styled.p`
  color: ${({ theme }) => theme.colors.blue[200]};
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 14.3px */
`;

export const DisabledChipWrapper = styled.div`
  ${WrapperLayout}

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: ${({ theme }) => theme.colors.gray[100]};
`;

export const DisabledChipText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};

  /* [Overline] 오버라인 */
  ${({ theme }) => theme.text.overline}
`;
