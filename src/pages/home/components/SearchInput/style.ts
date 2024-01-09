import styled from "@emotion/styled";
import { IoIosSearch } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

export const Container = styled.div`
  max-width: 780px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 14.5rem;
  padding: 1.3rem;
  background: linear-gradient(231deg, #5d99f2 35.76%, #5ed8ff 83.56%);
`;

export const Text = styled.p`
  color: #fff;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.25rem;
  padding: 0.5625rem 0.75rem 0.5625rem 2.5rem;
  border-radius: 200px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: ${({ theme }) => theme.shadows[2]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const Icon = css`
  position: absolute;
  left: 1rem;
  width: 1.125rem;
  height: 1.125rem;
`;

export const LocationInputIcon = styled(IoIosSearch)`
  ${Icon}
  color: ${({ theme }) => theme.colors.blue[300]};
`;

export const SecondInputContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CalenderInputIcon = styled(IoCalendarOutline)`
  ${Icon}
  color: ${({ theme }) => theme.colors.blue[300]};
`;

export const UserInputIcon = styled(FaRegUser)`
  ${Icon}
  color: ${({ theme }) => theme.colors.blue[300]};
`;

export const ProductNumberText = styled.p`
  text-align: center;
  color: #fff;
  font-size: ${({ theme }) => theme.text.button2.fontSize};
  font-weight: ${({ theme }) => theme.text.button2.fontWeight};
  line-height: ${({ theme }) => theme.text.button2.lineHeight};
`;

export const SearchButton = styled(motion.button)`
  padding: 0.2rem 0;
  color: ${({ theme }) => theme.colors.blue[300]};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: #fff;
  font-size: ${({ theme }) => theme.text.button1.fontSize};
  font-weight: ${({ theme }) => theme.text.button1.fontWeight};
  line-height: ${({ theme }) => theme.text.button1.lineHeight};
`;
