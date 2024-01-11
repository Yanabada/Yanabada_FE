import { useGuest } from "@pages/search/store/guestStore";
import * as S from "./guestCounter.style";
import SearchNotice from "./SearchNotice";
import MinusIcon from "@assets/icons/minus.svg?react";
import PlusIcon from "@assets/icons/plus.svg?react";

const GuestCounter = () => {
  const { adult, child, increaseAdult, decreaseAdult, increaseChild, decreaseChild } = useGuest();
  const isChildZero = child === 0;
  const isAdultZero = adult === 0;

  return (
    <S.Container>
      <SearchNotice />
      <S.Wrapper>
        <span>성인</span>
        <S.Wrapper>
          <S.IconWrapper className={`${isAdultZero ? "" : "active"}`} onClick={decreaseAdult}>
            <MinusIcon />
          </S.IconWrapper>
          <span>{adult}</span>
          <S.IconWrapper className="active" onClick={increaseAdult}>
            <PlusIcon />
          </S.IconWrapper>
        </S.Wrapper>
      </S.Wrapper>
      <S.HLine />
      <S.Wrapper>
        <span>아동</span>
        <S.Wrapper>
          {/* TODO: 인원수에 따른 클래스명 변경 */}
          <S.IconWrapper className={`${isChildZero ? "" : "active"}`} onClick={decreaseChild}>
            <MinusIcon />
          </S.IconWrapper>
          <span>{child}</span>
          <S.IconWrapper className="active" onClick={increaseChild}>
            <PlusIcon />
          </S.IconWrapper>
        </S.Wrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default GuestCounter;
