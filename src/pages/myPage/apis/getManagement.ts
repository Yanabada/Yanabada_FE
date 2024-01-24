import { instance } from "@apis/instance";

const getManagement = async ({ page = 0 }) => {
  const getManagementURL = `/trades/approvals?page=${page}`;

  const response = await instance.get(getManagementURL);

  console.log(response.data.data);

  return response.data.data;
};

export default getManagement;
