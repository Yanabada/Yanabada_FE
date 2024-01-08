import styled from "@emotion/styled";

export const Carousel = styled.div`
  background-color: blue;

  padding-inline-start: calc(1rem + 26px);

  overflow: hidden;
`;

export const CarouselInner = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const CarouselItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 276px;
  height: 104px;
`;

export const Image = styled.img`
  min-width: 100%;
  object-fit: cover;
`;
