import * as S from "./styles";
import NavButton from "./NavButton";

const BottomNavBar = () => {
  return (
    <div>
      <S.BottomNavWrapper>
        <NavButton path="/" />
        <NavButton path="/search" />
        <NavButton path="/sell" />
        <NavButton path="/chat" />
        <NavButton path="/myPage" />
      </S.BottomNavWrapper>
    </div>
  );
};

export default BottomNavBar;
