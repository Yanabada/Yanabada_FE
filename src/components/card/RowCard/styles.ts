import styled from "@emotion/styled";
import * as C from "@components/card/ColumnCard/styles";

export const Wrapper = styled(C.Wrapper)``;

export const Container = styled(C.Container)`
  display: flex;
  width: 16rem;
  height: 10.5rem;
`;

export const ImageContainer = styled(C.ImageContainer)``;

export const DiscountRate = styled(C.DiscountRate)``;

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

export const Image = styled(C.Image)`
  width: 6.25rem;
  height: 100%;
`;

export const LocationContainer = styled(C.LocationContainer)`
  top: 90%;
`;

export const Location = styled(C.Location)``;

export const InformationContainer = styled.div`
  padding: 0.5rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;
  margin-bottom: 0.6rem;
`;

export const ProductName = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

export const RoomName = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: -0.015rem;
`;

export const Period = styled(C.Period)``;

export const TimerContainer = styled(C.TimerContainer)`
  justify-content: flex-end;
`;

export const TimerText = styled(C.TimerText)``;

export const PriceContainer = styled(C.PriceContainer)`
  margin-right: 0;

  &.deadLine {
    height: 40%;
  }
`;

export const Price = styled(C.Price)``;

export const SellingContainer = styled(C.SellingContainer)``;

export const SellingRate = styled(C.SellingRate)``;

export const SellingPrice = styled(C.SellingPrice)``;
