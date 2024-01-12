import styled from "@emotion/styled";
import { FaUser } from "react-icons/fa6";
import { RiTimerLine } from "react-icons/ri";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 0.4rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 12.5rem;

  gap: 0.5rem;
  padding-bottom: 1rem;
  border-radius: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background-color: #fff;

  overflow: hidden;
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Image = styled.img`
  width: 7.25rem;
  object-fit: cover;
`;

export const DiscountRate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.625rem;
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

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.3rem;
  width: 100%;
  height: 1.125rem;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
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
`;

export const ProductName = styled.p`
  ${({ theme }) => theme.text.subtitle5};
`;

export const RoomName = styled.p`
  ${({ theme }) => theme.text.caption1};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Period = styled.p`
  ${({ theme }) => theme.text.caption1};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const StarUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const StarRating = styled.p`
  margin-top: 0.1rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.overline};
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const UserIcon = styled(FaUser)`
  width: 0.7rem;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const UserNumber = styled.p`
  margin-top: 0.1rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.overline};
`;

export const RightInnerContainer = styled.div`
  width: 13rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 0.5rem;
`;

export const TimerNegoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
`;

export const TimerIcon = styled(RiTimerLine)`
  color: ${({ theme }) => theme.colors.blue[200]};
`;

export const TimerText = styled.p`
  color: ${({ theme }) => theme.colors.blue[200]};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: -0.015rem;
`;

export const NegoText = styled.p<{ canNegotiate: boolean }>`
  color: ${({ theme, canNegotiate }) =>
    canNegotiate ? theme.colors.blue[200] : theme.colors.gray[600]};
  ${({ theme }) => theme.text.overline};

  padding: 0.1875rem 0.3125rem;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.blue[100]};
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10.5rem;

  .sellingPrice {
    color: ${({ theme }) => theme.colors.gray[900]};
    ${({ theme }) => theme.text.subtitle4};
  }
`;

export const PriceText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.caption1};
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.caption1};
`;
