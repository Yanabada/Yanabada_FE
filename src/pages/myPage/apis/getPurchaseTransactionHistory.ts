import axios from "axios";

const getPurchaseTransactionHistory = async (tradeId: number | undefined) => {
  const getPurchaseTransactionHistoryURL = `/trades/purchases/${tradeId}`;

  const response = await axios.get(getPurchaseTransactionHistoryURL);

  return response.data;
};

export default getPurchaseTransactionHistory;
