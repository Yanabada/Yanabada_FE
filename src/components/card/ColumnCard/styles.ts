import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Container = styled.div`
  width: 9.5rem;
  height: 17.5rem;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const DiscountRate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 1.5rem;
  padding: 0.0625rem 0.125rem;
  background: linear-gradient(
    246deg,
    rgba(71, 178, 250, 0.95) -16.43%,
    rgba(21, 147, 232, 0.95) 75.17%
  );
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  line-height: 130%;
  position: absolute;
`;

export const Image = styled.img`
  width: 9.5rem;
  height: 7.25rem;
  object-fit: cover;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.3rem;
  width: 100%;
  height: 1.125rem;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 6.1rem;
`;

export const Location = styled.p`
  margin-top: 0.125rem;
  color: #fff;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 0.9375rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;

  .TimeIcon {
    color: ${({ theme }) => theme.colors.blue[200]};
  }
`;

export const TimerText = styled.p`
  color: ${({ theme }) => theme.colors.blue[200]};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: -0.015rem;
  margin-top: 0.15rem;
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

export const Period = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.3125rem;
  letter-spacing: 0.0081rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.1rem;
  margin-right: 0.5rem;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 0.75rem;
  font-weight: 400;
  text-decoration: line-through;
`;

export const SellingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SellingRate = styled.div`
  color: ${({ theme }) => theme.colors.blue[200]};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3125rem;
`;

export const SellingPrice = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 1.0625rem;
  font-weight: 600;
  line-height: 1.5625rem;
`;
