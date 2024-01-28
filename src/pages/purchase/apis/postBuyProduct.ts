import { instance } from "@apis/instance";
import ReservationData from "../types/reservationData";

export const postBuyProduct = async (requestData: ReservationData) => {
  console.log(requestData);

  const postBuyProductURL = "/trades";

  const response = await instance.post(postBuyProductURL, requestData);

  console.log(response.data.data);

  return response.data.data;
};

export default postBuyProduct;
