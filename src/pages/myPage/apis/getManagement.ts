import axios from "axios";

const getManagement = async ({ page = 0 }) => {
  const getManagementURL = `/trades/approvals?page=${page}`;

  const response = await axios.get(getManagementURL);

  return response.data;
};

export default getManagement;
