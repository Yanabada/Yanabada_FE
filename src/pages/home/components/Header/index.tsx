import * as S from "./style";
import { FaRegBell } from "react-icons/fa";
import LogoIcon from "assets/icons/nav_Logo.svg?react";
import YanoljaIcon from "assets/icons/yanolja_Icon.svg?react";
import NumberBadge from "@components/numberBadge";

const Header = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.BellContainer>
          <NumberBadge number={99} />
          <FaRegBell className="bell" />
        </S.BellContainer>
        <LogoIcon />
        <S.GotoContainer>
          <S.GotoText>야놀자 바로가기</S.GotoText>
          <YanoljaIcon />
        </S.GotoContainer>
      </S.HeaderContainer>
    </S.Container>
  );
};

export default Header;
