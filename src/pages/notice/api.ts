import { NotificationResponseData } from "./type";
import instance from "@apis/instance";

const NOTI_URL = "/notifications";

export const getNotifications = async () => {
  const response = await instance.get(NOTI_URL);

  return response.data as NotificationResponseData;
};

export const deleteNotifications = async (ids: Array<{ id: number }>) => {
  const response = await instance.delete(NOTI_URL, {
    data: ids
  });

  return response.data;
};

export const deleteAllNotifications = async () => {
  const response = await instance.delete(`${NOTI_URL}/all`);

  return response.data;
};
