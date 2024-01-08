import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Carousel = styled.div`
  position: relative;
  height: 104px;
`;

export const CarouselItem = styled(motion.div)`
  position: absolute;

  width: 100%;
  height: 104px;

  overflow: hidden;
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageIndex = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 3px 5px;

  border-top-left-radius: 5px;

  font-size: 14px;

  background-color: #fff;
  opacity: 0.7;
`;
