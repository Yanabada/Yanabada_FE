import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import putFCMToken from "../api/putFCMToken";

export const useFCMToken = () => {
  return useMutation({
    mutationFn: (FCMToken: string) => putFCMToken(FCMToken),
    onSuccess: () => {
      toast.success("FCM 토큰이 발급되었습니다.");
    },
    onError: (err) => {
      toast.error("FCM 토큰이 발급되지 않았습니다.");
      console.log(err);
    }
  });
};

export default useFCMToken;
