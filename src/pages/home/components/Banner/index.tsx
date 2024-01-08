import * as S from "./styles";
import images from "./images";
import { useEffect, useRef, useState } from "react";

const BANNER_WIDTH = 276;
const MARGIN = 16;

const Banner = () => {
  const [cardIndex, setCardIndex] = useState(1);
  const [cardList, setCardList] = useState<Array<string>>([]);

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const duplicatedFirstCard = images[0];
    const duplicatedLastCard = images[images.length - 1];
    const newCardList = [duplicatedLastCard, ...images, duplicatedFirstCard];
    setCardList(newCardList);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translateX(-${cardIndex * (BANNER_WIDTH + MARGIN)}px)`;
    }
    console.log(cardIndex);
  }, [cardIndex]);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setCardIndex(index);
      if (ref.current) {
        ref.current.style.transition = "";
      }
    }, 300);
  };

  const handleSwipe = (direction: number) => {
    const newIndex = cardIndex + direction;

    if (newIndex >= cardList.length - 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      moveToNthSlide(cardList.length - 2);
    }

    setCardIndex(newIndex);

    if (ref.current) {
      ref.current.style.transition = "transform 0.3s ease";
    }
  };

  return (
    <>
      <S.Carousel>
        <S.CarouselInner ref={ref}>
          {cardList.map((image, index) => (
            <S.CarouselItem key={index}>
              <S.Image src={image} />
            </S.CarouselItem>
          ))}
        </S.CarouselInner>
      </S.Carousel>
      <div className="next" onClick={() => handleSwipe(1)}>
        {"►"}
      </div>
      <div className="prev" onClick={() => handleSwipe(-1)}>
        {"◀︎"}
      </div>
    </>
  );
};

export default Banner;
