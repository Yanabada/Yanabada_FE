import ChatIcon from "@assets/icons/nav_Chat.svg?react";
import HumanIcon from "@assets/icons/nav_My.svg?react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

interface NoChatListProps {
  type: "noLogin" | "noChat";
}

const NoChatList = ({ type }: NoChatListProps) => {
  const navigate = useNavigate();

  const typeList = new Map([
    [
      "noLogin",
      {
        text: "로그인이 필요해요!",
        icon: <HumanIcon />,
        content: (
          <S.Content>
            <S.HightLight
              onClick={() => {
                navigate("/login?redirect=/chat");
              }}
            >
              로그인
            </S.HightLight>{" "}
            후 채팅 기능을 이용할 수 있어요
          </S.Content>
        )
      }
    ],
    [
      "noChat",
      {
        text: "대화 내역이 비어있어요!",
        icon: <ChatIcon />,
        content: (
          <S.Content>
            마음에 드는 숙소를 골라
            <br />
            ‘가격제안’ 버튼을 통해 대화를 시작해보세요.
          </S.Content>
        )
      }
    ]
  ]);

  const data = typeList.get(type);

  // switch (type) {
  //   case "noLogin":
  //     return <div>NoChatList</div>;
  //   case "noChat":
  //     return <div>NoChatList</div>;
  // }
  return (
    <S.ChatContainer>
      <S.Container>
        {data?.icon}
        <S.Title>{data?.text}</S.Title>
        {data?.content}
      </S.Container>
    </S.ChatContainer>
  );
};

export default NoChatList;
