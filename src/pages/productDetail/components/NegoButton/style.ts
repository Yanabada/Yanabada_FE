import styled from "@emotion/styled";
import { RiTimerLine } from "react-icons/ri";

export const Container = styled.div`
  max-width: 780px;
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 10px 14px 14px 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const DateText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.caption1};
`;

export const SaleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SaleRate = styled.p`
  color: ${({ theme }) => theme.colors.blue[200]};
  ${({ theme }) => theme.text.body1};
`;

export const PriceText = styled.p`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.body3};
`;

export const SellingText = styled.p`
  ${({ theme }) => theme.text.subtitle2};
`;

export const RightContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.3rem;
`;

export const SoldOutText = styled.p`
  color: ${({ theme }) => theme.colors.pink[200]};
  ${({ theme }) => theme.text.button2};
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const TimerIcon = styled(RiTimerLine)`
  color: ${({ theme }) => theme.colors.blue[200]};
`;

export const TimerText = styled.p`
  color: ${({ theme }) => theme.colors.blue[200]};
  ${({ theme }) => theme.text.caption1};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`;
