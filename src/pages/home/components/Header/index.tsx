import * as S from "./style";
import { FaRegBell } from "react-icons/fa";
import LogoIcon from "assets/icons/nav_Logo.svg?react";
import NumberBadge from "@components/numberBadge";
import { useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY >= 180;
      setIsHeaderActive(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [180, 230], ["rgba(0,0,0,0)", "#fff"]);

  return (
    <S.Container className={isHeaderActive ? "isHeaderActive" : ""}>
      <S.HeaderContainer style={{ backgroundColor }}>
        <S.BellContainer>
          <NumberBadge number={99} />
          <FaRegBell className="bell" />
        </S.BellContainer>
        <S.LogoContainer className="logoContainer">
          <LogoIcon />
        </S.LogoContainer>
        <S.Wrapper></S.Wrapper>
      </S.HeaderContainer>
    </S.Container>
  );
};

export default Header;
