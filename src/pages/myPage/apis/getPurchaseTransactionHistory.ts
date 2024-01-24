import { instance } from "@apis/instance";

const getPurchaseTransactionHistory = async (tradeId: number | undefined) => {
  const getPurchaseTransactionHistoryURL = `/trades/purchases/${tradeId}`;

  const response = await instance.get(getPurchaseTransactionHistoryURL);

  console.log(response.data.data);

  return response.data.data;
};

export default getPurchaseTransactionHistory;
