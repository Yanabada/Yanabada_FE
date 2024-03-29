import styled from "@emotion/styled";

export interface HistoryProps {
  width?: string;
}

export const PointsMiddleContainer = styled.div<HistoryProps>`
  display: flex;
  width: ${({ width }) => width || "360px"};
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

export const ListCardWrapper = styled.div<HistoryProps>`
  width: ${({ width }) => width || "360px"};
  height: auto;
  display: flex;
  padding: 20px 14px;
  gap: 20px;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.gray[200]};
`;
