import styled from "@emotion/styled";
import { FaRegUser } from "react-icons/fa6";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageCounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 1.125rem;
  background: var(--Dimming, rgba(0, 0, 0, 0.4));
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  ${({ theme }) => theme.text.caption1}

  .second {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.8rem;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 1.125rem;
  gap: 0.3rem;
  margin: 0.3rem 0;
`;

export const StarRating = styled.p`
  margin-top: 0.15rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.body2};
`;

export const Category = styled.p`
  margin-top: 0.15rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.body2};
`;

export const ProductName = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => theme.text.subtitle2};
`;

export const RoomName = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.subtitle5};
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-top: 0.3rem;
`;

export const UserIcon = styled(FaRegUser)`
  width: 1rem;
  height: 1rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const User = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.body2};
`;

export const GuideText = styled.p`
  color: ${({ theme }) => theme.colors.pink[200]};
  ${({ theme }) => theme.text.caption1};
`;

export const CheckContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem 1.5rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  box-shadow: ${({ theme }) => theme.shadows[3]};
`;

export const CheckInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.caption2};
`;

export const CheckInText = styled.p`
  ${({ theme }) => theme.text.subtitle5};
`;

export const CheckTimeText = styled.p`
  ${({ theme }) => theme.text.body2};
`;

export const Line = styled.div`
  height: 4rem;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0.5rem 1rem 1rem 0;
`;

export const PriceInnerContainer = styled.div`
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
  ${({ theme }) => theme.text.body1};
`;

export const SaleRate = styled.p`
  color: ${({ theme }) => theme.colors.blue[200]};
  ${({ theme }) => theme.text.subtitle5};
  margin: 0.15rem 0 0rem 0.5rem;
`;
