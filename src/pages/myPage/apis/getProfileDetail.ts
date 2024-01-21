// import { instance } from "@apis/instance";
import axios from "axios";

const getProfileDetail = async () => {
  const getProfileDetailURL = `/api/member `;

  const response = await axios.get(getProfileDetailURL);

  console.log(response.data);

  return response.data;
};

export default getProfileDetail;
