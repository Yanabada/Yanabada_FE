import { instance } from "@apis/instance";

const getProfileDetail = async () => {
  const getProfileDetailURL = `/member`;

  const response = await instance.get(getProfileDetailURL);

  console.log(response.data.data);

  return response.data.data;
};

export default getProfileDetail;
