import axios from "axios";

export const postApprovalDeny = async (tradeId: number | undefined) => {
  const postApprovalDenyURL = `/trades/${tradeId}/reject`;

  const response = await axios.post(postApprovalDenyURL);

  return response.data;
};

export default postApprovalDeny;
