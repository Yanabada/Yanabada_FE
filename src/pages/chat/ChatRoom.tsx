import UpperNavBar from "@components/navBar/upperNavBar";
import OutIcon from "@assets/icons/chatRoomDelete.svg?react";
import ChatRoomBanner from "./components/chatRoomBanner";
import { useEffect, useRef, useState } from "react";
import Modal from "@components/modal";
import ChatText from "./components/chatText";
import * as S from "./styles/styles";
import useMessages from "./hooks/useMessages";
import { useParams } from "react-router-dom";
import useUpdateChatRoom from "./hooks/useUpdateChatRoom";
import useDeleteRoom from "./hooks/useDeleteRoom";
import ChatInput from "./components/chatInput";
import { Message } from "./types/chatRoom";
import { Client } from "@stomp/stompjs";
import { MessageSubType } from "./hooks/subscribeApi";
import { MessagePubType } from "./hooks/publishApi";

const ChatRoom = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const { roomId } = useParams();
  // 챗룸으로 왔을 때, 코드는 무조건 있어야 함
  const { data } = useMessages({ code: roomId! });
  const client = useRef<Client>();

  const { mutate: updateRoom } = useUpdateChatRoom();
  const { mutate: deleteRoom } = useDeleteRoom();

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new Client({
      brokerURL: `ws://test.yanabada.com/ws-stomp`,
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 500000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log("onConnect 들어옴");
        subscribe();
      },
      onStompError: (frame) => {
        console.error("Stomp Error:", frame);
      }
    });

    client.current.activate();
    console.log("activated?");
  };

  const disconnect = () => {
    console.log("연결끊겼당");
    client.current?.deactivate();
  };

  const subscribe = () => {
    client.current?.subscribe(`/sub/chatroom/${roomId}`, ({ body }) => {
      const bodyObj = JSON.parse(body) as MessageSubType;
      setChatMessages((prev) => [...prev, bodyObj]);
    });
  };

  const publish = (params: MessagePubType) => {
    if (!client.current?.connected) return;
    if (!params.content?.trim()) return;
    if (params.content?.length > 255) return;

    console.log(client.current);

    client.current.publish({
      destination: `/pub/message`,
      body: JSON.stringify({
        chatRoomCode: params.chatRoomCode,
        senderId: params.senderId,
        content: params.content
      })
    });
  };

  const productData = {
    code: "240107f84892a35ed5",
    image: "http://via.placeholder.com/300x300",
    accommodationName: "춘천세종호텔",
    roomName: "스탠다드 룸",
    checkInDate: "2024-01-16",
    checkOutDate: "2024-01-19",
    policyNumber: 2
  };
  const status = "ON_SALE";

  // 채팅 왔을 때 아래로 스크롤 (훅으로 만들어 주쎄용)
  const bottom = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    bottom.current!.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data?.data.messages]);

  return (
    <>
      <UpperNavBar
        type="back"
        isCustom
        customBack={() => {
          updateRoom({ code: roomId! });
        }}
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
        originalPrice={1200000}
        saleEndDate="2021-09-30"
        sellerId={1}
        purchasePrice={600000}
        cancelFee={300000}
        productData={productData}
      />
      <S.ChatContainer ref={bottom} status={status}>
        {!data || data.data.messages.length === 0 ? (
          <p>메시지가 없습니다.</p>
        ) : (
          <>
            <ChatText message={data.data.messages[data.data.messages.length - 1]} isNotice />
            {data.data.messages
              .map((message) => <ChatText key={message.sendTime.toString()} message={message} />)
              .reverse()}
            {chatMessages.map((message) => (
              <ChatText key={message.sendTime.toString()} message={message} />
            ))}
          </>
        )}
      </S.ChatContainer>

      <ChatInput
        chatRoomCode={roomId!}
        senderId={JSON.parse(localStorage.getItem("member")!).id}
        publish={publish}
      />

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
        rightAction={() => {
          disconnect();
          deleteRoom({ code: roomId! });
        }}
      />
    </>
  );
};

export default ChatRoom;
