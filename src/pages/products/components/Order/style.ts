import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.875rem 0.25rem 0.5rem;
  height: 2.3125rem;
  background: ${({ theme }) => theme.colors.gray[200]};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 0.5rem;
`;

export const CheckBox = styled.input`
  width: 1rem;
  height: 1rem;

  border: 1.5px solid ${({ theme }) => theme.colors.gray[600]};
  border-radius: 0.35rem;

  cursor: pointer;
  appearance: none;

  &:checked {
    border-color: transparent;

    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.blue[300]};
  }
`;

export const CheckText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.button2}
`;

export const DropDownBox = styled(motion.div)``;

export const OrderItem = styled.div`
  width: 5.1875rem;
  padding: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const DownIcon = styled(IoIosArrowDown)`
  width: 0.75rem;
  height: 0.75rem;
`;
