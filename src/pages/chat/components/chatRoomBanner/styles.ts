import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows[4]};
  z-index: 5;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 14px;
`;

export const TitleText = styled.span`
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => theme.text.body1};
  font-weight: 600;
`;

export const RoomText = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.caption1};
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NotOnSaLeText = styled.div`
  color: ${({ theme }) => theme.colors.pink[200]};
  ${({ theme }) => theme.text.caption1};
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: baseline;
`;

export const DiscountText = styled.span`
  color: ${({ theme }) => theme.colors.blue[200]};
  ${({ theme }) => theme.text.body3};
`;

export const PriceText = styled.span`
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => theme.text.subtitle4};
`;

export const OriginalPriceText = styled.span`
  color: ${({ theme }) => theme.colors.gray[300]};
  ${({ theme }) => theme.text.caption1};
  text-decoration: line-through;
`;

export const TimeContainer = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue[200]};
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  svg {
    fill: ${({ theme }) => theme.colors.blue[200]};
  }
`;
