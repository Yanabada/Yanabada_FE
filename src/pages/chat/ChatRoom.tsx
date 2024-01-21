import UpperNavBar from "@components/navBar/upperNavBar";
import OutIcon from "@assets/icons/chatRoomDelete.svg?react";
import ChatRoomBanner from "./components/chatRoomBanner";
import { useEffect, useRef, useState } from "react";
import Modal from "@components/modal";
import ChatText from "./components/chatText";
import * as S from "./styles/styles";
import ChatInput from "./components/chatInput";
import { Message } from "./types/chatRoom";

const ChatRoom = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  // const productData = {
  //   code: "240107f84892a35ed5",
  //   image: "http://via.placeholder.com/300x300",
  //   accommodationName: "춘천세종호텔",
  //   roomName: "스탠다드 룸",
  //   checkInDate: "2024-01-16",
  //   checkOutDate: "2024-01-19",
  //   policyNumber: 2
  // };
  const status = "ON_SALE";

  // 채팅 왔을 때 아래로 스크롤
  const bottom = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    bottom.current!.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        sellingPrice={600000}
        price={1200000}
        saleEndDate="2021-09-30"
        sellerId={1}
        purchasePrice={600000}
        cancelFee={0}
        // productData={productData}
      />
      <S.ChatContainer ref={bottom} status={status}>
        <ChatText isNotice />
        {/* FIXME - 테스트 화면 녹화 후 삭제 예정 */}
        <ChatText senderId={2} />
        {messages.reverse().map(({ senderId, content }: Message, index) => (
          <ChatText key={index} senderId={senderId} content={content} />
        ))}
      </S.ChatContainer>

      <ChatInput chatRoomCode={1} senderId={1} setMessages={setMessages} />

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
