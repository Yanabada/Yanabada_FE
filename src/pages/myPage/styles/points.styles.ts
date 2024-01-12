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
