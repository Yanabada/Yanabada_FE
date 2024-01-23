import axios from "axios";

export const postSaleApprove = async (tradeId: number | undefined) => {
  const postSaleApproveURL = `/trades/${tradeId}/approve`;

  const response = await axios.post(postSaleApproveURL);

  return response.data;
};

export default postSaleApprove;
