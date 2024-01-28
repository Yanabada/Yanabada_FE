import { instance } from "@apis/instance";

const getPurchaseHistory2 = async () => {
  const getPurchaseHistoryURL = `/trades/purchases`;

  const response = await instance.get(getPurchaseHistoryURL);

  console.log(response.data.data);

  return response.data.data;
};

export default getPurchaseHistory2;
