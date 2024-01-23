import { instance } from "@apis/instance";

const deleteTradeHistory = async (tradeId: number | null) => {
  const deleteTradeHistoryURL = `/trades/${tradeId}`;

  const response = await instance.delete(deleteTradeHistoryURL);

  console.log(response.data.data);

  return response.data.data;
};

export default deleteTradeHistory;
