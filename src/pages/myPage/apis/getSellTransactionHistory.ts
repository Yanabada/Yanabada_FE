import axios from "axios";

const getSellTransactionHistory = async (tradeId: number | undefined) => {
  const getSellTransactionHistoryURL = `/trades/approvals/${tradeId}`;

  const response = await axios.get(getSellTransactionHistoryURL);

  return response.data;
};

export default getSellTransactionHistory;
