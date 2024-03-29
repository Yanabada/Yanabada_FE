import styled from "@emotion/styled";
import { FaUser } from "react-icons/fa6";
import { RiTimerLine } from "react-icons/ri";
import { motion } from "framer-motion";

interface CardProps {
  canNegotiate?: boolean;
  fullContent?: boolean;
  borderRadius?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.4rem;
  background-color: #fff;
`;

export const ItemContainer = styled(motion.div)<CardProps>`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background-color: #fff;
  cursor: pointer;

  &.map {
    left: 50%;
    position: absolute;
    z-index: 1001;

    bottom: 2rem;
  }

  button.icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    &[data-opened="false"] {
      rotate: 180deg;
    }

    svg > path {
      stroke: #0751c3;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  border-radius: 0.25rem 0 0 0.25rem;
  overflow: hidden;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  ${({ theme }) => theme.text.subtitle5}
`;

export const Image = styled.img`
  width: 10rem;
  object-fit: cover;
`;

export const DiscountRate = styled.div<CardProps>`
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
  border-radius: ${({ borderRadius }) => borderRadius || "0px"};
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.05rem;
  padding: 0 0.2rem;
  width: 100%;
  height: 1.125rem;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
`;

export const Location = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff;
  ${({ theme }) => theme.text.overline};
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  width: 100%;
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

export const NegoContainer = styled.div`
  margin-top: 0.15rem;
  padding: 0.1875rem 0.3125rem;
  border: 1px solid ${({ theme }) => theme.colors.blue[100]};
  border-radius: 24px;
  ${({ theme }) => theme.text.overline};
  color: ${({ theme }) => theme.colors.blue[200]};
`;

export const NoNegoContainer = styled(NegoContainer)`
  color: ${({ theme }) => theme.colors.gray[600]};
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const NegoText = styled.p<CardProps>`
  color: ${({ theme, canNegotiate }) =>
    canNegotiate ? theme.colors.blue[200] : theme.colors.gray[600]};
  ${({ theme }) => theme.text.overline};
  padding: 0.1875rem 0.3125rem;
  border-radius: 24px;
  border: 1px solid
    ${({ theme, canNegotiate }) => (canNegotiate ? theme.colors.blue[100] : theme.colors.gray[500])};
  background-color: ${({ theme, canNegotiate }) =>
    canNegotiate ? "#fff" : theme.colors.gray[100]};
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
