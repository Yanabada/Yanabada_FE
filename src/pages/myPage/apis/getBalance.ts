import { instance } from "@apis/instance";

const getBalance = async () => {
  const getBalanceURL = "/payments/summary";

  const response = await instance.get(getBalanceURL);

  console.log(response.data.data);

  return response.data.data;
};

export default getBalance;
