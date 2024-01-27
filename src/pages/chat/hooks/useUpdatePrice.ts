import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changePrice } from "../apis/api";
import { ChangePriceData } from "../types/chatRoom";
import { toast } from "react-hot-toast";

const useUpdatePrice = (setIsBottomSheetVisible) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ productId, price }: ChangePriceData) => changePrice({ productId, price }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["productDetail", data.data.productId] });
      setIsBottomSheetVisible(false);
    },
    onError: () => {
      toast.error("가격 변경에 실패했습니다.");
    }
  });

  return mutation;
};

export default useUpdatePrice;
