import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ModalBg = styled.div`
  position: fixed;
  z-index: 900;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled(motion.div)`
  position: fixed;
  z-index: 1001;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  min-width: 250px;
  max-width: 500px;
  background-color: #fff;
  border-radius: 20px;
  padding: 24px;
  text-align: center;
  text-wrap: balance;
  box-shadow: ${({ theme }) => theme.shadows[1]};

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  > button {
    flex: 1;
  }
`;

export const TitleText = styled.div`
  ${({ theme }) => theme.text.subtitle4}
`;

export const ContentText = styled.div`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.button2}
`;
