import { useMutation } from "@tanstack/react-query";
import { MessageRequestParam } from "../types/chatRoom";
import { deleteChatRoom } from "../apis/api";
import { useNavigate } from "react-router-dom";

const useDeleteRoom = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (params: MessageRequestParam) => deleteChatRoom({ code: params.code }),
    onSuccess: (data) => {
      navigate("/chat");
      console.log("삭제 성공", data);
    },
    onError: (error) => {
      console.log("삭제 실패", error);
    }
  });
  return mutation;
};

export default useDeleteRoom;
