import axios from "axios";

const getSalesHistory = async ({ page = 0 }) => {
  const getSalesHistoryURL = `products/own?page=${page}`;

  const response = await axios.get(getSalesHistoryURL);

  return response.data;
};

export default getSalesHistory;
