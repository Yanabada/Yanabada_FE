import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const BottemSheetWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;

  max-width: 780px;
  z-index: 1000;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
`;
