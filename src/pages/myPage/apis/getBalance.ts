// import { instance } from "@apis/instance";
import axios from "axios";

const getBalance = async () => {
  const getBalanceURL = "/payments/summary";

  const response = await axios.get(getBalanceURL);

  return response.data;
};

export default getBalance;
