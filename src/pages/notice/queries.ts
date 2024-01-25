import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteAllNotifications, deleteNotifications, getNotifications } from "./api";

const useNotifications = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications
  });

  const deleteSelectedNotifications = useMutation({
    mutationFn: (ids: Array<{ id: number }>) => deleteNotifications(ids)
  });

  const deleteAllNotification = useMutation({
    mutationFn: deleteAllNotifications
  });

  return { data, isLoading, error, deleteSelectedNotifications, deleteAllNotification };
};

export default useNotifications;
