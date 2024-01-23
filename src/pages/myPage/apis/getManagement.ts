import axios from "axios";

const getManagement = async ({ page = 0 }) => {
  const getManagementURL = `/trades/approvals?page=${page}`;

  const response = await axios.get(getManagementURL);

  console.log(response.data);

  return response.data;
};

export default getManagement;
