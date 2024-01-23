import { instance } from "@apis/instance";

const getSellTransactionHistory = async (tradeId: number | undefined) => {
  // FIXME: 판매자가 /trades/approvals/${tradeId}에 접근할 수 없음
  const getSellTransactionHistoryURL = `/trades/purchases/${tradeId}`;

  const response = await instance.get(getSellTransactionHistoryURL);

  console.log(response.data.data);

  return response.data.data;
};

export default getSellTransactionHistory;
