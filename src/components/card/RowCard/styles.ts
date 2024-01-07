import styled from "@emotion/styled";
import * as Card from "../card.styles";

export const Wrapper = styled(Card.Wrapper)``;

export const Container = styled(Card.Container)`
  width: 16rem;
  height: 10.5rem;
`;

export const ImageContainer = styled(Card.ImageContainer)``;

export const DiscountRate = styled(Card.DiscountRate)``;

export const TimeOut = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  height: 1.5rem;
  padding: 0.125rem;
  background-color: ${({ theme }) => theme.colors.orange[200]};
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  line-height: 130%;
  position: absolute;
`;

export const TimerOutText = styled.p`
  margin-top: 0.125rem;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: -0.3px;
`;

export const Image = styled(Card.Image)`
  width: 6.25rem;
  height: 100%;
`;

export const LocationContainer = styled(Card.LocationContainer)`
  top: 90%;
`;

export const Location = styled(Card.Location)``;

export const InformationContainer = styled(Card.InformationContainer)`
  padding: 0.5rem;
`;

export const ProductContainer = styled(Card.ProductContainer)``;

export const ProductName = styled(Card.ProductName)``;

export const RoomName = styled(Card.RoomName)``;

export const Period = styled(Card.Period)``;

export const TimerContainer = styled(Card.TimerContainer)`
  justify-content: flex-end;
`;

export const TimerText = styled(Card.TimerText)``;

export const PriceContainer = styled(Card.PriceContainer)`
  margin-right: 0;

  &.deadLine {
    height: 40%;
  }
`;

export const Price = styled(Card.Price)``;

export const SellingContainer = styled(Card.SellingContainer)``;

export const SellingRate = styled(Card.SellingRate)``;

export const SellingPrice = styled(Card.SellingPrice)``;
