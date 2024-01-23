import { instance } from "@apis/instance";

const getSalesHistory = async ({ page = 0 }) => {
  const getSalesHistoryURL = `products/own?page=${page}`;

  const response = await instance.get(getSalesHistoryURL);

  console.log(response.data.data);

  return response.data.data;
};

export default getSalesHistory;
