import * as S from "./styles";
import NavButton from "./NavButton";

const BottomNavBar = () => {
  return (
    <div>
      <S.BottomNavWrapper>
        <NavButton path="/" />
        <NavButton path="/products" />
        <NavButton path="/sell" />
        <NavButton path="/chat" />
        <NavButton path="/mypage" />
      </S.BottomNavWrapper>
    </div>
  );
};

export default BottomNavBar;
