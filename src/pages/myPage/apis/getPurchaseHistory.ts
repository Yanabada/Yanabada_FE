import { instance } from "@apis/instance";

const getPurchaseHistory = async ({ page = 0 }) => {
  const getPurchaseHistoryURL = `/trades/purchases?page=${page}`;

  const response = await instance.get(getPurchaseHistoryURL);

  console.log(response.data.data);

  return response.data.data;
};

export default getPurchaseHistory;
