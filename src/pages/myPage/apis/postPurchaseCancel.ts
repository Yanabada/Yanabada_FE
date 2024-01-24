import { instance } from "@apis/instance";

export const postPurchaseCancel = async (tradeId: number | undefined) => {
  const postPurchaseCancelURL = `/trades/${tradeId}/cancel`;

  const response = await instance.post(postPurchaseCancelURL);

  console.log(response.data.data);

  return response.data.data;
};

export default postPurchaseCancel;
