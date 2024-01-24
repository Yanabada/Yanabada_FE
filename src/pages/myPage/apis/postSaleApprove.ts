import { instance } from "@apis/instance";

export const postSaleApprove = async (tradeId: number | undefined) => {
  const postSaleApproveURL = `/trades/${tradeId}/approve`;

  const response = await instance.post(postSaleApproveURL);

  console.log(response.data.data);

  return response.data.data;
};

export default postSaleApprove;
