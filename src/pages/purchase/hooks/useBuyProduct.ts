import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import postBuyProduct from "../apis/postBuyProduct";
import ReservationData from "../types/reservationData";

export const useBuyProduct = () => {
  return useMutation({
    mutationFn: async (requestData: ReservationData) => {
      await postBuyProduct(requestData);
    },
    onSuccess: () => {
      toast.success("거래가 생성되었습니다.");
    },
    onError: (err) => {
      toast.error("거래를 생성할 수 없습니다.");
      console.log(err);
    }
  });
};

export default useBuyProduct;
