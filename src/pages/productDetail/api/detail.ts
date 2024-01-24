import instance from "@apis/instance";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const getDetail = async (productId: number) => {
  try {
    const response = await instance.get(`/products/${productId}`);
    return response.data.data;
  } catch (err) {
    console.error("getProducts: ", err);
  }
};

export default getDetail;

export const createChatRoom = async (productId: number, buyerId: number) => {
  try {
    const response = await instance.post("/chats", {
      productId,
      buyerId
    });
    return response.data;
  } catch (error) {
    console.error("Error", error);
    if (error instanceof AxiosError) {
      if (
        error.response?.data.errorMessage ===
        ("네고 불가능한 상품입니다." || "이미 채팅방이 존재합니다.")
      ) {
        toast.error(error.response?.data.errorMessage);
        return;
      }
    }
    toast.error("채팅방 생성에 실패했습니다.");
  }
};
