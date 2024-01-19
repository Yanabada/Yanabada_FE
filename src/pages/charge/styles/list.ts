import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  margin-top: 22px;
  padding: 0 14px;
`;

export const SectionDescriptionWrapper = styled.div`
  height: 48px;
  padding: 0px 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background: ${({ theme }) => theme.colors.gray[200]};
`;

export const ListMessageWrapper = styled.div`
  padding: 10px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 0;

  border-radius: 5px;
`;

export const MessageText = styled.p`
  ${({ theme }) => theme.text.body2}
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const PointsBottomContainer = styled.div`
  padding: 0 14px;
  height: 536px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow: scroll;
`;

export const PointList = styled.div`
  width: 100%;
  padding: 12px 0px;

  display: flex;
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
  ${({ theme }) => theme.text.body2}
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: center;
`;

export const MinusReason = styled.p`
  ${({ theme }) => theme.text.body2}
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;
`;

export const PlusPoint = styled.p`
  ${({ theme }) => theme.text.body1}
  color: ${({ theme }) => theme.colors.pink[100]};
  text-align: center;
`;

export const MinusPoint = styled.p`
  ${({ theme }) => theme.text.body1}
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;
`;

export const EventName = styled.p`
  ${({ theme }) => theme.text.caption1}
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;

  margin-right: 10px;
`;

export const Date = styled.p`
  ${({ theme }) => theme.text.caption1}
  color: ${({ theme }) => theme.colors.gray[600]};

  flex: 1 0 0;
`;

export const DueDate = styled.p`
  ${({ theme }) => theme.text.caption1}
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: right;
`;

export const NoItemWrapper = styled.div`
  position: absolute;
  top: 440.5px;
  bottom: 256.5px;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const NoItemText = styled.p`
  ${({ theme }) => theme.text.body2}
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;
`;

export const PointsMiddleContainer = styled.div`
  display: flex;
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
  ${({ theme }) => theme.text.button1}
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: center;
`;

export const MiddleRightText = styled.p`
  ${({ theme }) => theme.text.button2}
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const DisappearMessageWrapper = styled.div`
  padding: 10px 0px;

  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 6px;

  border-radius: 5px;
`;

export const PriceInfo = styled.div`
  width: 100%;
  padding-bottom: 4px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const PointText = styled.p`
  ${({ theme }) => theme.text.subtitle2}
  color: ${({ theme }) => theme.colors.gray[700]};

  margin-left: 5px;
`;

export const Point = styled.p`
  ${({ theme }) => theme.text.body2}
  color: ${({ theme }) => theme.colors.gray[600]};

  margin-right: 5px;
`;
