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
import Cookies from "js-cookie";
import useProductDetail from "@pages/productDetail/hooks/useProductDetail";
import { useSearchParams } from "react-router-dom";
import { formatDateTo } from "@utils/formatDateTo";

const ChatRoom = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const { roomId } = useParams();
  const [searchParams] = useSearchParams();
  const productId = parseInt(searchParams.get("productId")!);
  // 챗룸으로 왔을 때, 코드는 무조건 있어야 함
  const { data } = useMessages({ code: roomId! });
  const {
    getDetailQuery: { data: productData }
  } = useProductDetail(productId);
  const client = useRef<Client>();

  const { mutate: updateRoom } = useUpdateChatRoom();
  const { mutate: deleteRoom } = useDeleteRoom();

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new Client({
      brokerURL: `wss://api.yanabada.com/ws-stomp`,
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
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
  };

  const disconnect = () => {
    console.log("Disconnect");
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

  // 채팅 왔을 때 아래로 스크롤 (훅으로 만들어 주쎄용)
  const bottom = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    bottom.current!.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <>
      <UpperNavBar
        type="back"
        isCustom
        customBack={() => {
          updateRoom({ code: roomId! });
        }}
        title={productData?.seller.nickname}
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
      {productData && (
        <ChatRoomBanner
          title={productData.accommodationInfo.name}
          status={productData.status}
          roomName={productData.roomInfo.name}
          salesPercentage={productData.salesPercentage}
          sellingPrice={productData.sellingPrice}
          originalPrice={productData.price}
          saleEndDate={formatDateTo(productData.saleEndDate, "d일 HH시간 mm분")!}
          sellerId={productData.seller.id}
          purchasePrice={productData.purchasePrice}
          code={productData.orderCode}
          image={productData.roomInfo.image}
          accommodationName={productData.accommodationInfo.name}
          checkInDate={formatDateTo(productData.checkInDate, "yyyy.MM.dd")!}
          checkOutDate={formatDateTo(productData.checkOutDate, "yyyy.MM.dd")!}
          policyNumber={productData.roomInfo.cancelPolicy}
        />
      )}
      <S.ChatContainer ref={bottom} status={status}>
        {(!data || data.data.messages.length === 0) && chatMessages.length === 0 ? (
          <p>메시지가 없습니다.</p>
        ) : (
          <>
            {!data || data.data.messages.length === 0 ? null : (
              <>
                <ChatText message={data.data.messages[data.data.messages.length - 1]} isNotice />
                {data.data.messages
                  .map((message) => (
                    <ChatText key={message.sendTime.toString()} message={message} />
                  ))
                  .reverse()}
              </>
            )}
            {chatMessages.map((message) => (
              <ChatText key={message.sendTime.toString()} message={message} />
            ))}
          </>
        )}
      </S.ChatContainer>

      <ChatInput
        chatRoomCode={roomId!}
        senderId={JSON.parse(Cookies.get("id")!)}
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
