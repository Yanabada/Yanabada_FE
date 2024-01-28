import styled from "@emotion/styled";
import PointsMiddleTabProps from "@pages/myPage/types/pointsMiddleTabProps";

export const SectionDescriptionWrapper = styled.div<PointsMiddleTabProps>`
  display: flex;
  width: ${({ width }) => width || "360px"};
  height: 48px;
  padding: 0px 14px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background: ${({ theme }) => theme.colors.gray[200]};
`;

export const ListMessageWrapper = styled.div`
  display: flex;
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
  flex: 1 0 0;

  border-radius: 5px;
`;

export const MessageText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const PointsBottomContainer = styled.div`
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 536px;
  overflow: scroll;
`;

export const PointList = styled.div<PointsMiddleTabProps>`
  display: flex;
  width: ${({ width }) => `calc(${width} - 29px)` || "331px"};
  padding: 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
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

export const DisappearMessageWrapper = styled.div`
  display: flex;
  padding: 10px 0px;
  align-items: center;
  gap: 6px;
  align-self: stretch;

  border-radius: 5px;
`;

export const PriceInfo = styled.div`
  display: flex;
  padding-bottom: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const PointText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};

  margin-left: 5px;

  /* [Subtitle2] 메뉴 텍스트 */
  ${({ theme }) => theme.text.subtitle2}
`;

export const Point = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};

  margin-right: 5px;

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;
