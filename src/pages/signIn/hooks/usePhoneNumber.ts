import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import putPhoneNumber from "../apis/putPhoneNumber";
import { toast } from "react-hot-toast";

export const usePhoneNumber = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (phoneNumber: string | null) => putPhoneNumber(phoneNumber),
    onSuccess: () => {
      toast.success("휴대폰번호가 변경되었습니다.");
      navigate(`/mypage/profile`);
    },
    onError: (err) => {
      toast.error("휴대폰번호를 변경할 수 없습니다.");
      console.log(err);
    }
  });
};

export default usePhoneNumber;
