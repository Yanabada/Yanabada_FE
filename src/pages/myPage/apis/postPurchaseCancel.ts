import axios from "axios";

export const postPurchaseCancel = async (tradeId: number | undefined) => {
  const postPurchaseCancelURL = `/trades/${tradeId}/cancel`;

  const response = await axios.post(postPurchaseCancelURL);

  return response.data;
};

export default postPurchaseCancel;
