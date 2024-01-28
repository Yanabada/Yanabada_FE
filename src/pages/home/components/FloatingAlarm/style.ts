import styled from "@emotion/styled";
import { IoIosArrowForward } from "react-icons/io";

export const Container = styled.div`
  max-width: 780px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  padding: 1rem 2.5rem 1rem 1rem;
  position: fixed;
  bottom: 6.8%;
  z-index: 2;
  border-radius: 30px 30px 0px 0px;
  background: rgba(3, 52, 126, 0.9);
  box-shadow: 0px 2px 18px 3px rgba(0, 0, 0, 0.1);
`;

export const LottieContainer = styled.div`
  width: 4.5625rem;
  height: 6.25rem;
  margin-bottom: 1.5rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const LinkText = styled.p`
  color: #fff;
  ${({ theme }) => theme.text.body3}
`;

export const ArrowIcon = styled(IoIosArrowForward)`
  color: #fff;
`;

export const Text = styled.p`
  color: #fff;
  ${({ theme }) => theme.text.subtitle5}
`;
