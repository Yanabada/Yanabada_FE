import instance from "@apis/instance";

interface RequestProp {
  orderId: number;
  price: number;
  isAutoCancel: boolean;
  canNegotiate: boolean;
  saleEndDate: string;
  description: string;
}

export const callSellApi = async ({
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

    const responseData = response.data;
    console.log("API 호출 성공", responseData);

    return responseData;
  } catch (error) {
    console.error("API 호출 중 에러 발생", error);
    throw error;
  }
};
