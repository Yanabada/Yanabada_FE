import * as S from "./styles";
import images from "./images";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 300 : -300,
      opacity: 0
    };
  }
};

const Banner = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <S.Carousel>
      <AnimatePresence initial={false} custom={direction}>
        <S.CarouselItem>
          <a
            href={images[wrap(0, images.length, imageIndex - 1)].link}
            target="_blank"
            style={{ width: "10%", height: "104px" }}
          >
            <S.PrevImage
              src={images[wrap(0, images.length, imageIndex - 1)].image}
              key={page - 1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            />
          </a>
          <S.ImageContainer>
            <a target="_blank" href={images[imageIndex].link}>
              <S.Image
                src={images[imageIndex].image}
                key={page}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              />
            </a>
            <S.ImageIndex>
              {imageIndex + 1} / {images.length}
            </S.ImageIndex>
          </S.ImageContainer>
          <a
            href={images[wrap(0, images.length, imageIndex + 1)].link}
            target="_blank"
            style={{ width: "10%", height: "104px" }}
          >
            <S.NextImage
              src={images[wrap(0, images.length, imageIndex + 1)].image}
              key={page + 1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            />
          </a>
        </S.CarouselItem>
      </AnimatePresence>
    </S.Carousel>
  );
};

export default Banner;
