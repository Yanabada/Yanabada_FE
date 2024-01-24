import { useMutation } from "@tanstack/react-query";
import { updateChatRoom } from "../apis/api";
import { MessageRequestParam } from "../types/chatRoom";
import { useNavigate } from "react-router-dom";

const useUpdateChatRoom = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (params: MessageRequestParam) => updateChatRoom({ code: params.code }),
    onSuccess: (data) => {
      navigate("/chat");
      console.log("데이터 전송 성공", data);
    },
    onError: (error) => {
      console.log("전송 실패", error);
    }
  });
  return mutation;
};

export default useUpdateChatRoom;
