import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { registerPayment } from "../apis/register";

const useRegisterForPayment = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerPayment,
    onSuccess: () => {
      toast.success("계좌 등록 성공!");
      navigate("/charge/success");
    },
    onError: (error: Error) => {
      toast.error("뭐라하지");
      console.error("등록 실패", error);
    }
  });

  return mutation;
};

export default useRegisterForPayment;
