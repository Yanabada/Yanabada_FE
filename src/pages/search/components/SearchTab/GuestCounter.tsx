import { useGuest } from "@pages/search/stores/guestStore";
import * as S from "./guestCounter.style";
import SearchNotice from "./SearchNotice";
import MinusIcon from "@assets/icons/minus.svg?react";
import PlusIcon from "@assets/icons/plus.svg?react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const GuestCounter = () => {
  const { adult, child, increaseAdult, decreaseAdult, increaseChild, decreaseChild } = useGuest();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set("adult", adult.toString());
    searchParams.set("child", child.toString());

    setSearchParams(`?${searchParams.toString()}`);
  }, [adult, child, searchParams]);

  const handleClick = (type: string) => {
    if (type === "increaseAdult") {
      increaseAdult();
    } else if (type === "decreaseAdult") {
      decreaseAdult();
    } else if (type === "increaseChild") {
      increaseChild();
    } else {
      decreaseChild();
    }
  };

  return (
    <S.Container>
      <SearchNotice />
      <S.Wrapper>
        <span>성인</span>
        <S.Wrapper>
          <S.IconWrapper
            className={`${adult === 0 ? "" : "active"}`}
            onClick={() => handleClick("decreaseAdult")}
          >
            <MinusIcon />
          </S.IconWrapper>
          <span>{adult}</span>
          <S.IconWrapper className="active" onClick={() => handleClick("increaseAdult")}>
            <PlusIcon />
          </S.IconWrapper>
        </S.Wrapper>
      </S.Wrapper>
      <S.HLine />
      <S.Wrapper>
        <span>아동</span>
        <S.Wrapper>
          <S.IconWrapper
            className={`${child === 0 ? "" : "active"}`}
            onClick={() => handleClick("decreaseChild")}
          >
            <MinusIcon />
          </S.IconWrapper>
          <span>{child}</span>
          <S.IconWrapper className="active" onClick={() => handleClick("increaseChild")}>
            <PlusIcon />
          </S.IconWrapper>
        </S.Wrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default GuestCounter;
