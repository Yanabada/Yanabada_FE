import { instance } from "@apis/instance";

export const putFCMToken = async (fcmToken: string) => {
  const putFCMTokenURL = `/members/fcm-token`;

  const response = await instance.post(putFCMTokenURL, { fcmToken: fcmToken });

  console.log(response.data.data);

  return response.data.data;
};

export default putFCMToken;
