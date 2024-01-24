import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import putChangeNickname from "../apis/putChangeNickname";

export const useChangeNickName = () => {
  return useMutation({
    mutationFn: (nickname: string) => putChangeNickname(nickname),
    onSuccess: () => {
      toast.success("닉네임이 변경되었습니다.");
    },
    onError: (err) => {
      toast.error("닉네임을 변경할 수 없습니다.");
      console.log(err);
    }
  });
};

export default useChangeNickName;
