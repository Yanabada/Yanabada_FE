import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles";
import TrashCanIcon from "@assets/icons/bin.svg?react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "@components/modal";
import { useNavigate } from "react-router-dom";
import { NOTI_TYPE_TO_TEXT } from "./constants";
import useNotifications from "./queries";
import toast, { Toaster } from "react-hot-toast";
import NoNotice from "./components/NoNotice";
import { formatDateTo } from "@utils/formatDateTo";
import { AxiosError } from "axios";

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
  const [notis, setNotis] = useState<Array<{ id: number }>>([]);
  const navigate = useNavigate();
  const { data, error, deleteSelectedNotifications, deleteAllNotification } = useNotifications();

  const handleChange = (id: number) => {
    const existingNoti = notis.find((noti) => noti.id === id);

    if (existingNoti) {
      const newList = notis.filter((noti) => noti.id !== id);
      setNotis(newList);
    } else {
      setNotis((prev) => [...prev, { id: id }]);
    }
  };

  // UI 수정
  if (error instanceof AxiosError) {
    if (error.response.status === 400 || error.response.status === 401) {
      toast("로그인이 필요합니다.");
      navigate("/login");
    }
  }

  return (
    <>
      <Toaster />
      <UpperNavBar
        type="back"
        title="알림"
        rightElement={
          <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "완료" : "편집"}</button>
        }
      />
      <S.Container>
        {data?.data.notifications.length === 0 ? (
          <NoNotice />
        ) : (
          data?.data.notifications.map((noti) => (
            <AnimatePresence key={noti.notificationId} custom={isEditing}>
              <S.NoticeContainer
                custom={isEditing}
                variants={variants}
                initial="initial"
                animate="animate"
              >
                <S.ImageContainer>
                  <img src={noti.image} alt="" />
                </S.ImageContainer>
                <S.ContentWrapper onClick={() => navigate(NOTI_TYPE_TO_TEXT[noti.type].path)}>
                  <div className="description">
                    {NOTI_TYPE_TO_TEXT[noti.type].type}
                    <span className="date">{formatDateTo(noti.registeredDate, "yyyy.MM.dd")}</span>
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
                  <input type="checkbox" onChange={() => handleChange(noti.notificationId)} />
                </S.EditButton>
              </S.NoticeContainer>
            </AnimatePresence>
          ))
        )}
      </S.Container>
      <S.BottomWrapper>
        <button onClick={() => deleteAllNotification.mutate()}>
          <TrashCanIcon />
        </button>
        <button
          onClick={() => setModalVisible(true)}
          className={`${notis.length > 0 ? "active" : "disabled"}`}
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
        rightAction={() => {
          deleteSelectedNotifications.mutate(notis);
          setModalVisible(false);
        }}
        isVisible={isModalVisible}
        setIsVisible={setModalVisible}
      />
    </>
  );
};

export default Notice;
