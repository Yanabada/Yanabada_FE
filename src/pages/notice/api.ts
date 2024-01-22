import axios from "axios";
import { NotificationResponseData } from "./type";

const NOTI_URL = "http://test.yanabada.com/notifications";

export const getNotifications = async () => {
  const response = await axios.get(NOTI_URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbWFpbDIyMkBlbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwicHJvdmlkZXIiOiJFTUFJTCIsImlhdCI6MTcwNTkxNjU4OSwiZXhwIjoxNzA1OTE4Mzg5fQ.2MvFciy-mOVZq-3TWLRi50wAVDCRNMHukvwB866NMas"
    }
  });

  return response.data as NotificationResponseData;
};

export const deleteNotifications = async (ids: number[]) => {
  const response = await axios.delete(NOTI_URL, {
    data: ids
  });

  return response.data;
};
