import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  position: fixed;
  bottom: 4.5rem;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: 1px solid #fff;
  border-radius: 71px;

  padding: 0.75rem 1rem;

  ${({ theme }) => theme.text.subtitle5};
  color: #fff;
  background: linear-gradient(102deg, #3ac8f4 10.91%, #5e9bf3 89.69%);
  box-shadow: 0px 2px 18px 3px rgba(0, 0, 0, 0.1);

  z-index: 999;
`;
