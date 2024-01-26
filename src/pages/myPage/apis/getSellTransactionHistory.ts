import { instance } from "@apis/instance";

const getSellTransactionHistory = async (tradeId: number | undefined) => {
  const getSellTransactionHistoryURL = `/trades/approvals/${tradeId}`;

  const response = await instance.get(getSellTransactionHistoryURL);

  console.log(response.data.data);

  return response.data.data;
};

export default getSellTransactionHistory;
