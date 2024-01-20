import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles";
import TrashCanIcon from "@assets/icons/bin.svg?react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "@components/modal";

const variants = {
  initial: {
    x: 0
  },
  animate: (isEditing: boolean) => {
    return { x: isEditing ? "-46px" : 0 };
  }
};

const Notice = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isRadioChecked, setRadioChecked] = useState(false);

  const handleRadioChange = () => {
    const isChecked = document.querySelector('input[type="checkbox"]:checked') !== null;
    setRadioChecked(isChecked);
  };

  return (
    <>
      <UpperNavBar
        type="back"
        title="알림"
        rightElement={
          <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "완료" : "편집"}</button>
        }
      />
      <S.Container>
        <AnimatePresence custom={isEditing}>
          <S.NoticeContainer
            custom={isEditing}
            variants={variants}
            initial="initial"
            animate="animate"
          >
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
        </AnimatePresence>
        <AnimatePresence custom={isEditing}>
          <S.NoticeContainer
            custom={isEditing}
            variants={variants}
            initial="initial"
            animate="animate"
          >
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
        </AnimatePresence>
      </S.Container>
      <S.BottomWrapper>
        <button>
          <TrashCanIcon />
        </button>
        <button
          onClick={() => setModalVisible(true)}
          className={`${isRadioChecked ? "active" : "disabled"}`}
        >
          선택한 항목 삭제
        </button>
      </S.BottomWrapper>
      <Modal
        title="선택한 알림을 삭제 하시겠습니까?"
        content="삭제된 알림은 복구하실 수 없어요!"
        leftBtnText="아니오"
        leftAction={() => setModalVisible(false)}
        rightBtnText="삭제하기"
        isVisible={isModalVisible}
        setIsVisible={setModalVisible}
      />
    </>
  );
};

export default Notice;
