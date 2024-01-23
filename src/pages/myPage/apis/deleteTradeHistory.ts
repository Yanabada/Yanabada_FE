import axios from "axios";

const deleteTradeHistory = async (tradeId: number | null) => {
  const deleteTradeHistoryURL = `/trades/${tradeId}`;

  const response = await axios.delete(deleteTradeHistoryURL);

  return response.data;
};

export default deleteTradeHistory;
