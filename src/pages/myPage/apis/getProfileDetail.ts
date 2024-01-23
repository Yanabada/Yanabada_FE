// import { instance } from "@apis/instance";
import axios from "axios";

const getProfileDetail = async () => {
  const getProfileDetailURL = `/api/member`;

  const response = await axios.get(getProfileDetailURL);

  return response.data;
};

export default getProfileDetail;
