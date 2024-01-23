import instance from "@apis/instance";

interface RequestProp {
  productId: number;
  price: number;
  isAutoCancel: boolean;
  canNegotiate: boolean;
  saleEndDate: string;
  description: string;
}

const patchSellData = async ({
  productId,
  price,
  isAutoCancel,
  canNegotiate,
  saleEndDate,
  description
}: RequestProp) => {
  try {
    const response = await instance.patch(
      `${import.meta.env.VITE_API_BASE_URL}/products/${productId}`,
      {
        price,
        isAutoCancel,
        canNegotiate,
        saleEndDate,
        description
      }
    );

    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error("API 호출 중 에러 발생", error);
    throw error;
  }
};

export default patchSellData;
