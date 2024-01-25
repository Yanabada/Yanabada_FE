import { useNavigate } from "react-router-dom";
import instance from "@apis/instance";

interface RequestProp {
  orderId: number;
  price: number;
  isAutoCancel: boolean;
  canNegotiate: boolean;
  saleEndDate: string;
  description: string;
}

export const useCallSellApi = () => {
  const navigate = useNavigate();

  const callSellApi = async ({
    orderId,
    price,
    isAutoCancel,
    canNegotiate,
    saleEndDate,
    description
  }: RequestProp) => {
    try {
      const response = await instance.post("/products", {
        orderId,
        price,
        isAutoCancel,
        canNegotiate,
        saleEndDate,
        description
      });

      const responseData = response.data.data;
      navigate(`/sell/confirm/${responseData.productId}`);

      return responseData;
    } catch (error) {
      console.error("API 호출 중 에러 발생", error);
      throw error;
    }
  };

  return callSellApi;
};
