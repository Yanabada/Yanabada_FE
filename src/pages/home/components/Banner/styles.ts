import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Carousel = styled.div`
  display: flex;
  position: relative;
  height: 104px;
  overflow: hidden;
`;

export const CarouselItem = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 10px;
  cursor: pointer;
`;

export const ImageIndex = styled.span`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 3px 5px;
  z-index: 1;
  border-top-left-radius: 5px;
  font-size: 10px;
  background-color: #fff;
  opacity: 0.7;
`;

export const PrevImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 100% 100%;
  border-radius: 0px 10px 10px 0px;
  opacity: 0.5;

  @media (min-width: 680px) {
    width: 25%;
  }
`;

export const NextImage = styled(PrevImage)`
  object-position: 0% 0%;
  border-radius: 10px 0px 0px 10px;
`;
