import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import instance from "@apis/instance";

interface RequestProp {
  productId: number;
  price: number;
  isAutoCancel: boolean;
  canNegotiate: boolean;
  saleEndDate: string;
  description: string;
}
export const usePatchSellData = () => {
  const navigate = useNavigate();

  const patchSellData = async (
    { productId, price, isAutoCancel, canNegotiate, saleEndDate, description }: RequestProp,
    redirectParams: string | null
  ) => {
    try {
      const response = await instance.patch(`/products/${productId}`, {
        price,
        isAutoCancel,
        canNegotiate,
        saleEndDate,
        description
      });

      const responseData = response.data;
      toast.success("수정 완료되었습니다.");

      // 수정으로 넘어왔던 페이지로 이동
      if (redirectParams) {
        navigate(redirectParams);
      }

      return responseData;
    } catch (error) {
      console.error("API 호출 중 에러 발생", error);
      throw error;
    }
  };

  return patchSellData;
};
