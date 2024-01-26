import instance from "@apis/instance";
import { RequestInfo } from "../types/charge";

export const registerPayment = async ({ simplePassword, bankName, accountNumber }: RequestInfo) => {
  const requestData = {
    simplePassword,
    bankName,
    accountNumber
  };
  const response = await instance.post("/payments", requestData);
  return response.data;
};
