import styled from "@emotion/styled";
import { css } from "@emotion/react";

const CompareCardLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

export const PointsTopContainer = styled.div`
  padding: 0 14px;
`;

export const CompareCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-top: 5px;
`;

export const LeftCompareCard = styled.div`
  ${CompareCardLayout}
  padding: 8px 8px 8px 24px;

  border-radius: 71px 0px 0px 71px;
  background: ${({ theme }) => theme.colors.orange[100]};
`;

export const RightCompareCard = styled.div`
  ${CompareCardLayout}
  padding: 8px 16px;

  border-radius: 0px 70px 70px 0px;
  background: ${({ theme }) => theme.colors.orange[100]};
`;

export const CompareCardText = styled.p`
  ${({ theme }) => theme.text.body3}
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-self: stretch;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;
`;

export const LeftPointText = styled.p`
  ${({ theme }) => theme.text.subtitle2}
  color: ${({ theme }) => theme.colors.pink[100]};
`;

export const RightPointText = styled.p`
  ${({ theme }) => theme.text.subtitle2}
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const PointText = styled.p`
  ${({ theme }) => theme.text.body2}
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const PointsMiddleContainer = styled.div`
  display: flex;
  width: 365px;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 20px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const MiddleWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
`;

export const MiddleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const UnderLine = styled.div`
  height: 3px;
  align-self: stretch;

  background: ${({ theme }) => theme.colors.gray[900]};
`;

export const MiddleLeftText = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: center;

  /* [Button1] 버튼진하게 */
  ${({ theme }) => theme.text.button1}
`;

export const MiddleRightText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};

  /* [Button2] 일반버튼 */
  ${({ theme }) => theme.text.button2}
`;

export const PointsBottomContainer = styled.div`
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export const PointList = styled.div`
  display: flex;
  width: 331px;
  padding: 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  backdrop-filter: blur(10px);
`;

export const PointListRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const PlusReason = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: center;

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const MinusReason = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const PlusPoint = styled.p`
  color: ${({ theme }) => theme.colors.pink[100]};
  text-align: center;

  /* [body1] 숙소이름 */
  ${({ theme }) => theme.text.body1}
`;

export const MinusPoint = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;

  /* [body1] 숙소이름 */
  ${({ theme }) => theme.text.body1}
`;

export const EventName = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;

  margin-right: 10px;

  /* [Caption1] 하단네비 */
  ${({ theme }) => theme.text.caption1}
`;

export const Date = styled.p`
  flex: 1 0 0;

  color: ${({ theme }) => theme.colors.gray[600]};

  /* [Caption1] 하단네비 */
  ${({ theme }) => theme.text.caption1}
`;

export const DueDate = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: right;

  /* [Caption1] 하단네비 */
  ${({ theme }) => theme.text.caption1}
`;

export const NoItemWrapper = styled.div`
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  top: 440.5px;
  bottom: 256.5px;
`;

export const NoItemText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;
