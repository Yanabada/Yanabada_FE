import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles";
import TrashCanIcon from "@assets/icons/bin.svg?react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "@components/modal";
import { Notification } from "./type";
import { useNavigate } from "react-router-dom";
import { NOTI_TYPE_TO_TEXT } from "./constants";

const variants = {
  initial: {
    x: 0
  },
  animate: (isEditing: boolean) => {
    return { x: isEditing ? "-46px" : 0 };
  }
};

const notifications: Notification[] = [
  {
    notificationId: 1,
    senderNickname: "에디팍",
    accommodationName: "춘천세종호텔",
    image: "1profile.png",
    registeredDate: new Date("2024-01-18 00:10:10"),
    type: "CHAT",
    isRead: false
  },
  {
    notificationId: 2,
    accommodationName: "춘천세종호텔 아닙니다",
    image: "trade_request.png",
    registeredDate: new Date("2024-01-18 00:09:10"),
    type: "TRADE_REQUEST",
    isRead: false
  },
  {
    notificationId: 3,
    accommodationName: "춘천세종호텔 맞을 수도 있습니다",
    image: "trade_request.png",
    registeredDate: new Date("2024-01-18 00:09:10"),
    type: "TRADE_CANCELED",
    isRead: false
  },
  {
    notificationId: 4,
    accommodationName: "이건 무슨 호텔일까요",
    image: "trade_request.png",
    registeredDate: new Date("2024-01-18 00:09:10"),
    type: "TRADE_APPROVAL",
    isRead: false
  },
  {
    notificationId: 5,
    accommodationName: "이번엔 거절하겠습니다",
    image: "trade_request.png",
    registeredDate: new Date("2024-01-18 00:09:10"),
    type: "TRADE_REJECTED",
    isRead: false
  }
];

const Notice = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isRadioChecked, setRadioChecked] = useState(false);
  const navigate = useNavigate();

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
        {notifications.map((noti) => (
          <AnimatePresence key={noti.notificationId} custom={isEditing}>
            <S.NoticeContainer
              custom={isEditing}
              variants={variants}
              initial="initial"
              animate="animate"
            >
              <S.ImageContainer />
              <S.ContentWrapper onClick={() => navigate(NOTI_TYPE_TO_TEXT[noti.type].path)}>
                <div className="description">
                  {NOTI_TYPE_TO_TEXT[noti.type].type}
                  <span className="date">2023.12.31</span>
                </div>
                <div className="title">
                  {noti.type === "CHAT" && (
                    <span>
                      <span className="user-name">{noti.senderNickname} </span>님이{" "}
                    </span>
                  )}
                  {noti.type === "TRADE_REQUEST" && <span>등록하신 </span>}
                  {noti.type === "TRADE_CANCELED" && <span>구매자가 </span>}
                  <span className="product-name">{noti.accommodationName} </span>
                  {NOTI_TYPE_TO_TEXT[noti.type].text}
                </div>
              </S.ContentWrapper>
              <S.EditButton>
                <input type="checkbox" onChange={handleRadioChange} />
              </S.EditButton>
            </S.NoticeContainer>
          </AnimatePresence>
        ))}
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
