import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SectionLayout = css`
  display: flex;
  padding: 2px 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DiscountChipWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const DiscountChipLeftSection = styled.div`
  ${SectionLayout}

  border-radius: 2px 0px 0px 2px;
  background: ${({ theme }) => theme.colors.blue[200]};
`;

export const DiscountChipRightSection = styled.div`
  ${SectionLayout}
  align-self: stretch;

  border-radius: 0px 2px 2px 0px;
  border: 1px solid ${({ theme }) => theme.colors.blue[200]};
`;

export const LeftSectionText = styled.p`
  color: #fff;

  /* [Caption2] 캘린더 금액 */
  ${({ theme }) => theme.text.caption2}
`;

export const RightSectionText = styled.p`
  color: ${({ theme }) => theme.colors.blue[200]};

  /* [Overline] 오버라인 */
  ${({ theme }) => theme.text.overline}
`;
