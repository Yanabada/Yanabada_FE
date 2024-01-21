import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles";
import TrashCanIcon from "@assets/icons/bin.svg?react";
import { useState } from "react";

const Notice = () => {
  const [isRadioChecked, setRadioChecked] = useState(false);

  const handleRadioChange = () => {
    const isChecked = document.querySelector('input[type="checkbox"]:checked') !== null;
    setRadioChecked(isChecked);
  };

  return (
    <>
      <UpperNavBar type="back" title="알림" rightElement={<p>편집</p>} />
      <S.Container>
        <S.NoticeContainer>
          <S.ImageContainer />
          <S.ContentWrapper>
            <div className="title">
              <span className="name">파라스파라 호텔 </span>
              상품의 판매가 완료되었어요!
            </div>
            <div className="description">
              판매내역에서 구매승인을 해주세요!
              <span className="date">2023.12.31</span>
            </div>
          </S.ContentWrapper>
          <S.EditButton>
            <input type="checkbox" onChange={handleRadioChange} />
          </S.EditButton>
        </S.NoticeContainer>
        <S.NoticeContainer>
          <S.ImageContainer />
          <S.ContentWrapper>
            <div className="title">
              <span className="name">강쥐사랑해 </span>
              님이 '파라스파라 호텔...'에 대한 가격제안을 보냈어요!
            </div>
            <div className="description">
              채팅방에서 대화를 진행해주세요!
              <span className="date">2023.12.31</span>
            </div>
          </S.ContentWrapper>
          <S.EditButton>
            <input type="checkbox" onChange={handleRadioChange} />
          </S.EditButton>
        </S.NoticeContainer>
      </S.Container>
      <S.BottomWrapper>
        <button>
          <TrashCanIcon />
        </button>
        <button className={`${isRadioChecked ? "active" : "disabled"}`}>선택된 항목 삭제</button>
      </S.BottomWrapper>
    </>
  );
};

export default Notice;
