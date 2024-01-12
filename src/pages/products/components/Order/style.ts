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

export const DropDownBox = styled(motion.div)``;

export const OrderItem = styled.div`
  width: 5.1875rem;
  padding: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  border: 1px solid red;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const DownIcon = styled(IoIosArrowDown)`
  width: 0.75rem;
  height: 0.75rem;
`;
