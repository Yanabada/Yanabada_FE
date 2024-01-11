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

export const GrayInfoChipWrapper = styled.div`
  ${WrapperLayout}

  border-radius: 2px;
  border: 1px solid #d9d9d9;
  background: ${({ theme }) => theme.colors.gray[100]};
`;

export const GrayInfoChipText = styled.p`
  color: var(--_Black, #010101);

  /* [Overline] 오버라인 */
  ${({ theme }) => theme.text.overline}
`;

export const OutlineInfoChipWrapper = styled.div`
  ${WrapperLayout}

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.blue[100]};
  background: #fff;
`;

export const OutlineInfoChipText = styled.p`
  color: ${({ theme }) => theme.colors.blue[200]};

  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 14.3px */
`;

export const FooterInfoChipWrapper = styled.div`
  ${WrapperLayout}

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const FooterInfoChipText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
`;
