import { instance } from "@apis/instance";

export const postApprovalDeny = async (tradeId: number | undefined) => {
  const postApprovalDenyURL = `/trades/${tradeId}/reject`;

  const response = await instance.post(postApprovalDenyURL);

  console.log(response.data.data);

  return response.data.data;
};

export default postApprovalDeny;
