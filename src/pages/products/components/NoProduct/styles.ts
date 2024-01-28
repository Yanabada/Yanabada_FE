import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  margin-bottom: 56px;
`;

export const BannerWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 0;
  left: 0;
`;
