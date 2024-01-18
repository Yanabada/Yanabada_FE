import UpperNavBar from "@components/navBar/upperNavBar";
import OutIcon from "@assets/icons/chatRoomDelete.svg?react";
import ChatRoomBanner from "./components/chatRoomBanner";
import { useState } from "react";
import Modal from "@components/modal";
import ChatText from "./components/chatText";
import { numberFormat } from "@utils/numberFormat";
import * as S from "./styles/styles";
import ChatInput from "./components/chatInput";

const ChatRoom = () => {
  const [isVisible, setIsVisible] = useState(false);

  const productData = {
    code: "240107f84892a35ed5",
    image: "http://via.placeholder.com/300x300",
    accommodationName: "춘천세종호텔",
    roomName: "스탠다드 룸",
    checkInDate: "2024-01-16",
    checkOutDate: "2024-01-19",
    policyNumber: 2
  };
  return (
    <>
      <UpperNavBar
        type="back"
        title="강쥐사랑해진짜로"
        rightElement={
          <button
            onClick={() => {
              setIsVisible(true);
            }}
          >
            <OutIcon />
          </button>
        }
        hasBorder
      />
      <ChatRoomBanner
        title="파라스파라 서울 더 그레이트 현대 런던"
        status="ON_SALE"
        roomName="Forest Tower Deluxe King"
        salesPercentage={50}
        sellingPrice={numberFormat(600000)}
        price={numberFormat(1200000)}
        saleEndDate="2021-09-30"
        sellerId={1}
        purchasePrice={numberFormat(600000)}
        productData={productData}
      />
      <S.ChatContainer>
        <ChatText isNotice />
        <ChatText senderId={2} />
        <ChatText senderId={1} />
      </S.ChatContainer>

      <ChatInput />

      <Modal
        title="이 채팅방을 나가시겠어요?"
        content="채팅 내역이 모두 삭제됩니다."
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        leftBtnText="아니오"
        leftAction={() => {
          setIsVisible(false);
        }}
        rightBtnText="나가기"
        // TODO - rightAction={} 추가하기
      />
    </>
  );
};

export default ChatRoom;
