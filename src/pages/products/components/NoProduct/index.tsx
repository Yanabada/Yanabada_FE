import NoProductIcon from "@assets/icons/noPointIcon.svg?react";
import NoProductBanner from "@assets/icons/no_products_icon.svg?react";
import * as S from "./styles";

const NoProduct = () => {
  return (
    <S.Container>
      <a href="https://www.yanolja.com/" target="_blank">
        <NoProductIcon />
        <S.BannerWrapper
          initial={{ y: "30px", opacity: 0.3 }}
          animate={{
            y: 15,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          }}
        >
          <NoProductBanner />
        </S.BannerWrapper>
      </a>
    </S.Container>
  );
};

export default NoProduct;
