import instance from "@apis/instance";
import { RequestPassword } from "../types/charge";

const getPaymentDetail = async () => {
  try {
    const response = await instance.get("/payments");
    return response.data.data;
  } catch (err) {
    console.error("getPayDetail: ", err);
  }
};

const postPassword = async (requestData: RequestPassword) => {
  try {
    const response = await instance.post("/payments/charge", requestData);
    return response.data.data;
  } catch (err) {
    console.error("postPassword: ", err);
  }
};

const getPaymentHistory = async (historyId: number) => {
  try {
    const response = await instance.get(`/payments/histories/${historyId}`);
    return response.data.data;
  } catch (err) {
    console.error("getPaymentHistory: ", err);
  }
};

export { getPaymentDetail, postPassword, getPaymentHistory };
